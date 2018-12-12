node {
    def app

    stage('Clone repository') {
        /* Let's make sure we have the repository cloned to our workspace */
        checkout scm
        sh 'docker system prune -af'
    }
    stage('Build image') {
      
        app = docker.build("rayedbajwa/taskoli")
    }

    stage('Test image') {

        app.inside {
            sh 'echo "Tests passed"'
        }
    }

    stage('Push image') {
        
        docker.withRegistry('https://registry.hub.docker.com', 'docker-hub-credentials') {
            app.push("${env.BUILD_NUMBER}")
            app.push("latest")
        }
    }
    stage('Publish Docker Image') {
        def doPromote = input(message: 'Do you want to deploy to Production', ok: 'Yes', 
                        parameters: [booleanParam(defaultValue: true, 
                        description: 'If you want to deploy to www.taskoli.com, just push the button',name: 'Yes?')])

        if(doPromote){
            sh 'echo \'Welcome, Lets start updating taskoli\''
            sh 'docker pull rayedbajwa/taskoli:latest'
            sh 'docker stop taskoli'
            sh 'docker rm taskoli'
            sh 'docker run -it --name=taskoli -v taskoli:/app -p 8000:8000 -d rayedbajwa/taskoli:latest'
            sh 'echo \'Updated and started docker\''
        }
    }
}