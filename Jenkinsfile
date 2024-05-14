pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                echo 'Building..'
                // Comandos para build
                sh '/home/mdm/.asdf/shims/pm2 stop 2'
                sh 'pwd'
                sh 'ls -la'
                sh 'whoami'
                sh  '/home/mdm/.asdf/shims/npm install'
                sh  '/home/mdm/.asdf/shims/npm build'

            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
                // Comandos para testes
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying..'
                // Comandos para deploy
                sh 'ls -la'
                sh '/home/mdm/.asdf/shims/pm2 start 2'
            }
        }
    } 
}