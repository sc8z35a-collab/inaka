#!/usr/bin/env bash
# ensure-autosave.sh — 自動保存デーモンが生きていなければ起動する (冪等・高速・失敗しても 0 で終わる)
#
# package.json の pre* フック (predev / prebuild / pretest ...) から毎回呼ばれるため、
# サンドボックスがリセットされても npm スクリプトを 1 回叩いた時点で自動保存が復活する。
# ハートビートが INTERVAL*2 秒以上途絶えている場合はハングとみなして再起動する。
REPO_DIR="${REPO_DIR:-/home/user/webapp}"
INTERVAL="${AUTOSAVE_INTERVAL:-180}"
cd "$REPO_DIR" 2>/dev/null || exit 0
command -v pm2 >/dev/null 2>&1 || { echo "[ensure-autosave] pm2 not found; running nohup fallback"; \
  pgrep -f "scripts/autosave.sh" >/dev/null || nohup bash scripts/autosave.sh >/tmp/autosave.log 2>&1 & exit 0; }

status=$(pm2 jlist 2>/dev/null | node -e 'let s="";process.stdin.on("data",d=>s+=d).on("end",()=>{try{const p=JSON.parse(s).find(x=>x.name==="autosave");console.log(p?p.pm2_env.status:"none")}catch{console.log("none")}})')
hb=$(cat .git/autosave.heartbeat 2>/dev/null || echo 0)
age=$(( $(date +%s) - hb ))

if [[ "$status" == "online" && $age -lt $(( INTERVAL * 2 + 30 )) ]]; then
  exit 0
fi
if [[ "$status" == "none" ]]; then
  pm2 start scripts/autosave.sh --name autosave --interpreter bash --restart-delay 5000 >/dev/null 2>&1
  echo "[ensure-autosave] started autosave daemon"
else
  pm2 restart autosave >/dev/null 2>&1
  echo "[ensure-autosave] restarted autosave daemon (status=$status, heartbeat age=${age}s)"
fi
pm2 save >/dev/null 2>&1
exit 0
