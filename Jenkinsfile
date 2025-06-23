pipeline {
    agent any

    tools {
        nodejs 'NodeJS'
        sonarQubeScanner 'SonarQube'
    }

    stages {
        stage('SonarQube Analysis') {
            steps {
                echo 'Starting SonarQube analysis...'
                withSonarQubeEnv('SonarQube') {
                    sh '''
                        sonar-scanner \
                        -Dsonar.projectKey=app-granja-react \
                        -Dsonar.projectName=app-granja-react \
                        -Dsonar.sources=src \
                        -Dsonar.javascript.lcov.reportPaths=coverage/lcov.info \
                        -Dsonar.host.url=http://192.168.80.22:9000 \
                        -Dsonar.token=squ_ac6832d7841fd1d563bd39f4367e9f1c05d1bf4c
                    '''
                }
            }
        }
        stage('Build') {
            steps {
                echo 'Building the application...'
                sh 'node -v'
                sh 'npm install'
                sh 'npm run build'
            }
        }
        stage('Email Notification') {
            steps {
            emailext body: "Pipeline execution ${currentBuild.result}: Job ${env.JOB_NAME} build ${env.BUILD_NUMBER}\n\nCheck console output at ${env.BUILD_URL}",
                subject: "Jenkins Build ${currentBuild.result}: ${env.JOB_NAME}",
                to: 'jesusmatiz35@gmail.com'
            }
        }
    }

    post {
        success {
            echo 'Build successful!'
        }
        failure {
            echo 'Build failed!'
        }
    }
}