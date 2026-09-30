#!/usr/bin/env bash
# ---------------------------------------------------------------------------
# autosave.sh — 作業内容を一定間隔で自動コミット & push & PR 保証する常駐スクリプト
#
#  - INTERVAL 秒ごと (既定 180 秒 = 3 分) に作業ツリーを確認
#  - 変更があれば "chore(autosave): ..." としてコミットし、origin に push
#  - PR が存在しなければ genspark_ai_developer -> main の PR を自動作成
#  - merge / rebase / cherry-pick 中、または .autosave.pause が存在する間はスキップ
#  - 変更がなくても未 push のコミットがあれば push する
#  - 秘密情報 (API キー / トークン) を含む差分はコミットせず警告して待機
#  - 40MB 以上のファイルは .git/info/exclude に入れて除外
#  - 多重起動防止ロック (flock) 付き・ハートビートを .git/autosave.heartbeat に記録
#
#  起動:   bash scripts/ensure-autosave.sh   (npm の pre* フックからも自動で呼ばれる)
#  状態:   bash scripts/autosave-status.sh
#  停止:   pm2 stop autosave        一時停止: touch .autosave.pause
#  ログ:   pm2 logs autosave --nostream
#  即時:   bash scripts/autosave.sh --once
# ---------------------------------------------------------------------------
set -u
REPO_DIR="${REPO_DIR:-/home/user/webapp}"
BRANCH="${AUTOSAVE_BRANCH:-genspark_ai_developer}"
BASE="${AUTOSAVE_BASE:-main}"
INTERVAL="${AUTOSAVE_INTERVAL:-180}"
MAX_FILE_MB="${AUTOSAVE_MAX_FILE_MB:-40}"   # GitHub の 50MB 上限より手前で弾く
ONCE=0; [[ "${1:-}" == "--once" ]] && ONCE=1

cd "$REPO_DIR" || exit 1
if (( ! ONCE )); then
  exec 9>"$REPO_DIR/.git/autosave.lock"
  if ! flock -n 9; then echo "[autosave] already running"; exit 0; fi
fi

log() { echo "[autosave $(date '+%F %T')] $*"; }

busy() {
  local g=.git
  [[ -e $g/MERGE_HEAD || -d $g/rebase-merge || -d $g/rebase-apply || -e $g/CHERRY_PICK_HEAD || -e $g/index.lock ]]
}

# 追加行に秘密情報らしき文字列が含まれていないか (含まれていたら 0 を返す)
has_secret() {
  git diff --cached -U0 --no-color -- . ':(exclude)package-lock.json' 2>/dev/null \
    | grep -E '^\+' \
    | grep -qE '(gsk-[A-Za-z0-9_-]{20,}|gh[pousr]_[A-Za-z0-9]{30,}|github_pat_[A-Za-z0-9_]{30,}|sk-[A-Za-z0-9]{32,}|AKIA[0-9A-Z]{16}|-----BEGIN [A-Z ]*PRIVATE KEY-----)'
}

ensure_pr() {
  command -v gh >/dev/null || return 0
  local n
  n=$(timeout 60 gh pr list --head "$BRANCH" --base "$BASE" --state open --json number -q '.[0].number' 2>/dev/null)
  if [[ -z "$n" ]]; then
    timeout 60 gh pr create --head "$BRANCH" --base "$BASE" \
      --title "WIP: 細部の作り込み大幅アップグレード (autosave)" \
      --body "このPRは scripts/autosave.sh により3分おきに自動更新されます。作業完了時に最終コミットへ整理します。" \
      >/dev/null 2>&1 && log "PR created" || log "PR create failed (will retry)"
  fi
}

tick() {
  date +%s > .git/autosave.heartbeat
  [[ -e .autosave.pause ]] && { log "paused"; return; }
  busy && { log "git busy, skip"; return; }
  local cur; cur=$(git rev-parse --abbrev-ref HEAD)
  [[ "$cur" != "$BRANCH" ]] && { log "on branch $cur (not $BRANCH), skip"; return; }

  if [[ -n "$(git status --porcelain)" ]]; then
    # 巨大ファイルは除外して警告
    while IFS= read -r f; do
      [[ -f "$f" ]] || continue
      local sz; sz=$(( $(stat -c %s "$f") / 1048576 ))
      if (( sz >= MAX_FILE_MB )); then log "skip large file $f (${sz}MB)"; echo "/$f" >> .git/info/exclude; fi
    done < <(git status --porcelain --untracked-files=all | sed -E 's/^.. //; s/^"(.*)"$/\1/')
    git add -A
    if has_secret; then
      git reset -q
      log "SECRET-LIKE STRING DETECTED in changes — autosave refused. Remove it, then autosave resumes."
      return
    fi
    if ! git diff --cached --quiet; then
      local stat; stat=$(git diff --cached --shortstat | sed 's/^ //')
      git commit -q --no-verify -m "chore(autosave): $(date '+%F %T') — $stat" && log "committed: $stat"
    fi
  fi

  local ahead
  ahead=$(git rev-list --count "origin/$BRANCH..HEAD" 2>/dev/null || echo 1)
  if [[ "$ahead" != "0" ]]; then
    if timeout 120 git push -q origin "HEAD:$BRANCH" 2>/dev/null; then
      log "pushed ($ahead commit(s))"
    else
      # 手動で squash/rebase した後などは履歴が分岐する → lease 付き強制 push
      timeout 60 git fetch -q origin "$BRANCH" 2>/dev/null
      timeout 120 git push -q --force-with-lease origin "HEAD:$BRANCH" && log "force-pushed (with lease)" || log "push failed"
    fi
    ensure_pr
  fi
  date +%s > .git/autosave.last_ok
}

# Daemon ticks and manual --once runs share one lock so they never race on the index/push.
locked_tick() { ( flock -w 90 8 || { log "tick lock busy, skip"; exit 0; }; tick ) 8>"$REPO_DIR/.git/autosave.tick.lock"; }
if (( ONCE )); then locked_tick; exit 0; fi
log "started: repo=$REPO_DIR branch=$BRANCH interval=${INTERVAL}s"
while true; do
  locked_tick
  sleep "$INTERVAL"
done
