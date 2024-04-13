#!/bin/bash
source ~/.nvm/nvm.sh
~/.nvm/versions/node/v20.12.1/bin/pm2 stop wtaiatella
cd /var/www/wtaiatella
find . -mindepth 1 ! -name '.env' -exec rm -rf {} +