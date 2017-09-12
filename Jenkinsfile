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
    
    post {
        success {
            slackSend(color: '#36a64f', message: "${JOB_NAME} ${BUILD_DISPLAY_NAME} succeeded after ${currentBuild.durationString}. ${currentBuild.absoluteUrl}")
        }
        failure {
            slackSend(color: '#d00000', message: "${JOB_NAME} ${BUILD_DISPLAY_NAME} failed after ${currentBuild.durationString}! ${currentBuild.absoluteUrl}")
        }
    }
}
