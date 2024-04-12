#!/bin/bash
cd /var/www/
sudo chown -R ec2-user:ec2-user wtaiatella
cd /var/www/wtaiatella
chmod +x ./*.sh
source ~/.nvm/nvm.sh
~/.nvm/versions/node/v20.12.1/bin/npm install
~/.nvm/versions/node/v20.12.1/bin/npm run build
~/.nvm/versions/node/v20.12.1/bin/pm2 start wtaiatella