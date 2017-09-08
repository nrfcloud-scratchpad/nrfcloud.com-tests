pipeline {
    agent { label 'nodejs8' }
    
    environment {
        NRFCLOUD_LOGIN    = credentials('NRFCLOUD_LOGIN')
        NRFCLOUD_PASSWORD = credentials('NRFCLOUD_PASSWORD')
    }
    
    stages {
        stage('install') { 
            steps { 
                sh 'npm i' 
            }
        }
        stage('test') {
            steps {
                sh 'npm test'
            }
        }
    }
}
