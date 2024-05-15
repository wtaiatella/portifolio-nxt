pipeline {
    agent any
    stages {
        stage('Preparation') {
            steps {
                echo 'Preparing..'
                sh 'pwd'
                sh 'ls -la'
                sh 'whoami'
                sh 'cp /var/www/wtaiatella/.env ./'
                sh 'ls -la'
            }
        }
        stage('Install') {
            steps {
                echo 'Installing..'
                sh  '/home/mdm/.asdf/shims/npm install'
            }
        }
        stage('Build') {
            steps {
                echo 'Building..'
                sh  '/home/mdm/.asdf/shims/npm run build'
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
                // Comandos para testes
            }
        }
        stage('Preparation to Deploy to Production') {
            steps {
                echo 'Preparing to Deploy to Production..'

                sh '/home/mdm/.asdf/shims/pm2 stop 2'
                sh 'cd /var/www/wtaiatella'
                sh "find . -mindepth 1 ! -name '.env' -exec rm -rf {} +"
            }
        }
        stage('Deploy to Production') {
            steps {
                echo 'Deploying to Production..'
                
                sh 'cp -rf * /var/www/wtaiatella/'
                sh 'cp -rf .env /var/www/wtaiatella/'
                sh 'cp -rf .eslintrc.json /var/www/wtaiatella/'
                sh 'cp -rf .git /var/www/wtaiatella/'
                sh 'cp -rf .gitignore /var/www/wtaiatella/'
                sh 'cd /var/www/wtaiatella'
                sh 'ls -la'
            }
        }
        stage('Install in production') {
            steps {
                echo 'Installing..'
                sh 'cd /var/www/wtaiatella'
                sh  '/home/mdm/.asdf/shims/npm install'
            }
        }
        stage('Build in production') {
            steps {
                echo 'Building..'
                sh 'cd /var/www/wtaiatella'
                sh  '/home/mdm/.asdf/shims/npm run build'
            }
        }
        stage('Start Application') {
            steps {
                echo 'Starting Application..'
                sh 'cd /var/www/wtaiatella'
                sh '/home/mdm/.asdf/shims/pm2 start 2'
            }
        }
    } 
}