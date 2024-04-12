#!/bin/bash
cd /var/www/
echo "Alterando a propriedade da pasta wtaiatella"
sudo chown -R ec2-user:ec2-user wtaiatella
cd wtaiatella
echo "Mudando para o diretório wtaiatella"
cd /var/www/wtaiatella
echo "Carregando o ambiente do NVM"
source ~/.nvm/nvm.sh
echo "Instalando as dependências do projeto"
~/.nvm/versions/node/v20.12.1/bin/npm install
echo "Executando o script de build do projeto"
~/.nvm/versions/node/v20.12.1/bin/npm run build