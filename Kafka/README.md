# Instructions for installing kafka in Linux Server
### Some docker commands you might need
   [Docker comands](https://geekflare.com/es/docker-commands/)
        * sudo apt install docker
        * Check images: 
           > $ docker images
        * See the running dockers: 
           > $ docker ps
           > $ docker ps -a  
        * Execute commands inside the docker:
           > $ docker exec -it "ContainerID" bash
        * Restart docker container:
           > $ docker restart "ContainerID"
        * Stop docker container:
           > $ docker stop "ContainerID"
        * Remove container:
           > $ docker rm "ContainerID"
### Steps
        1. > $ sudo apt install docker
        1. Create docker-compose.yml
        ```
           version: "3"
           services: 
           zookeeper:
               image: "bitnami/zookeeper:latest"
               ports:
               - "2181:2181"
               environment:
               - ALLOW_ANONYMOUS_LOGIN=yes
           kafka:
               image: "bitnami/kafka:latest"
               container_name: "kafka"
               ports:
               - "9092:9092"
               environment:
               - KAFKA_BROKER_ID=1
               - KAFKA_LISTENERS=PLAINTEXT://:9092
               - KAFKA_ADVERTISED_LISTENERS=PLAINTEXT://127.0.0.1:9092
               - KAFKA_ZOOKEEPER_CONNECT=zookeeper:2181
               - ALLOW_PLAINTEXT_LISTENER=yes
               depends_on:
               - zookeeper
         ```
         1. Run docker-compose.yml file
            > $ docker compose up
         




