@echo off

call npx pnpm install --no-lockfile
SETLOCAL
SET PATH=node_modules\.bin;node_modules\hubot\node_modules\.bin;%PATH%

node_modules\.bin\hubot.cmd --name "N3ED-Noticer" %* 
