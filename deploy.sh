#!/bin/bash
cd /var/www/wtaiatella
git pull origin main
npm install
npm run build
npm run start
pm2 restart wtaiatella