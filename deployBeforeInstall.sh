#!/bin/bash
/usr/bin/git pull origin main
cd /var/www/wtaiatella
source ~/.nvm/nvm.sh
~/.nvm/versions/node/v20.12.1/bin/pm2 stop wtaiatella
find . -mindepth 1 ! -name '.env' -exec rm -rf {} +