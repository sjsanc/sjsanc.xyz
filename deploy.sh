#!/bin/bash

cd /var/www/sjsanc.xyz/sjsanc.xyz

git pull origin master

npm install 
gatsby build

systemctl reload apache2

echo "Working..."
