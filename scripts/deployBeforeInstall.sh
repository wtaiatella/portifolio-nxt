#!/bin/bash
source ~/.nvm/nvm.sh
~/.nvm/versions/node/v20.12.1/bin/pm2 stop wtaiatella
mv /var/www/wtaiatella/.env /var/www/.env
cd /var/www/
rm -rf wtaiatella
mkdir wtaiatella
mv .env wtaiatella/.env