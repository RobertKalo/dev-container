# Eureka service

## How to start
```sh
docker network create --opt encrypted --driver overlay --attachable dev-net
docker create \
    --name eureka \
    --network dev-net \
    --rm \
    loxon/meetup-devops-eureka:latest

docker start eureka 
```