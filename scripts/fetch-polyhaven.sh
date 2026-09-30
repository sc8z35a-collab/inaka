#!/usr/bin/env bash
# fetch-polyhaven.sh — download CC0 Poly Haven models and optimise them for the web.
#   bash scripts/fetch-polyhaven.sh model_a model_b ...
# Each model: 1k glTF -> simplify (ratio $RATIO) -> WebP 512px textures -> meshopt -> public/models/<name>.glb
# Requires: npm i --no-save @gltf-transform/cli@4
set -euo pipefail
cd "$(dirname "$0")/.."
RATIO="${RATIO:-0.35}"; TEX="${TEX:-512}"
work=/tmp/ph-work; mkdir -p "$work" public/models
for name in "$@"; do
  out="public/models/$name.glb"
  [[ -f "$out" ]] && { echo "skip $name (exists)"; continue; }
  dir="$work/$name"; rm -rf "$dir"; mkdir -p "$dir"
  json=$(curl -sf "https://api.polyhaven.com/files/$name") || { echo "!! $name not found"; continue; }
  echo "$json" | python3 -c '
import json,sys,os
d=json.load(sys.stdin)["gltf"]["1k"]["gltf"]; base=sys.argv[1]
print(d["url"], os.path.join(base, os.path.basename(d["url"])))
for k,v in d["include"].items(): print(v["url"], os.path.join(base,k))' "$dir" | while read -r url path; do
    mkdir -p "$(dirname "$path")"; curl -sf "$url" -o "$path"
  done
  src=$(ls "$dir"/*.gltf | head -1)
  npx gltf-transform copy "$src" "$dir/a.glb" >/dev/null
  npx gltf-transform simplify "$dir/a.glb" "$dir/b.glb" --ratio "$RATIO" --error 0.002 >/dev/null
  npx gltf-transform webp "$dir/b.glb" "$dir/c.glb" --quality 80 >/dev/null
  npx gltf-transform resize "$dir/c.glb" "$dir/d.glb" --width "$TEX" --height "$TEX" >/dev/null
  npx gltf-transform meshopt "$dir/d.glb" "$out" >/dev/null
  echo "ok $name $(du -h "$out" | cut -f1)"
  rm -rf "$dir"
done
