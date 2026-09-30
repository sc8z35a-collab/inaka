#!/bin/bash
# One browser per view (the 1 GB sandbox OOMs when a single SwiftShader session renders many).
# Usage: bash tests/each.sh "x,y,z,lx,ly,lz,name" ...
cd /home/user/webapp
for v in "$@"; do
  VIEWS="[[${v%,*},\"${v##*,}\"]]" QUALITY=${QUALITY:-low} W=${W:-560} H=${H:-315} timeout 300 node tests/views.mjs 2>&1 | grep -E "view|pageerror|error" | head -3
done
