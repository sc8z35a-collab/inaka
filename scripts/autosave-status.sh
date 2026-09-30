#!/usr/bin/env bash
# autosave-status.sh — 自動保存の状態を一目で確認する
cd "${REPO_DIR:-/home/user/webapp}" || exit 1
now=$(date +%s)
hb=$(cat .git/autosave.heartbeat 2>/dev/null || echo 0)
ok=$(cat .git/autosave.last_ok 2>/dev/null || echo 0)
echo "daemon      : $(pm2 jlist 2>/dev/null | node -e 'let s="";process.stdin.on("data",d=>s+=d).on("end",()=>{try{const p=JSON.parse(s).find(x=>x.name==="autosave");console.log(p?p.pm2_env.status+" (restarts "+p.pm2_env.restart_time+")":"not registered")}catch{console.log("unknown")}})')"
echo "heartbeat   : $(( now - hb ))s ago"
echo "last success: $(( now - ok ))s ago"
echo "branch      : $(git rev-parse --abbrev-ref HEAD)  unpushed=$(git rev-list --count origin/genspark_ai_developer..HEAD 2>/dev/null)  dirty=$(git status --porcelain | wc -l)"
[[ -e .autosave.pause ]] && echo "state       : PAUSED (.autosave.pause exists)"
pm2 logs autosave --nostream --lines 5 2>/dev/null | grep autosave | tail -5
