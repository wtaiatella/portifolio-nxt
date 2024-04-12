#!/bin/bash
cd /var/www/
sudo chown -R ec2-user:ec2-user wtaiatella
cd wtaiatella
source ~/.nvm/nvm.sh
cd /var/www/wtaiatella
chmod +x ./scripts/*
~/.nvm/versions/node/v20.12.1/bin/npm install
~/.nvm/versions/node/v20.12.1/bin/npm run build