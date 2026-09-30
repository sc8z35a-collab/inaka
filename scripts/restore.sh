#!/usr/bin/env bash
# restore.sh — サンドボックスがリセットされた後に 1 コマンドで作業環境を復旧する。
#   bash scripts/restore.sh
# 1) genspark_ai_developer ブランチを remote から復元（ローカルの未保存変更は退避）
# 2) 自動保存デーモン (pm2: autosave) と dev サーバー (pm2: dev) を再起動
# 3) Playwright の Chromium とシステム依存を（無ければ）再インストール
set -u
REPO_DIR="${REPO_DIR:-/home/user/webapp}"; BRANCH="${AUTOSAVE_BRANCH:-genspark_ai_developer}"
cd "$REPO_DIR" || exit 1
git fetch -q origin "$BRANCH" main
cur=$(git rev-parse --abbrev-ref HEAD)
if [[ "$cur" != "$BRANCH" ]]; then
  [[ -n "$(git status --porcelain)" ]] && git stash push -u -m "restore-$(date +%s)" >/dev/null
  git checkout -q -B "$BRANCH" "origin/$BRANCH"
  git branch -q -u "origin/$BRANCH"
fi
echo "[restore] branch $(git rev-parse --abbrev-ref HEAD) @ $(git log --oneline -1)"
[[ -d node_modules ]] || npm ci --silent
bash scripts/ensure-autosave.sh
pm2 describe dev >/dev/null 2>&1 || pm2 start "npx vite --host 0.0.0.0 --port 3000" --name dev >/dev/null
pm2 save >/dev/null 2>&1
if ! ls ~/.cache/ms-playwright/chromium_headless_shell-* >/dev/null 2>&1; then
  (npx playwright install chromium >/tmp/pw-install.log 2>&1 && sudo npx playwright install-deps chromium >>/tmp/pw-install.log 2>&1 &)
  echo "[restore] installing playwright chromium in background (/tmp/pw-install.log)"
fi
pm2 ls
