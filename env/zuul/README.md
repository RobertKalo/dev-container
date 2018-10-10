# Eureka service

## How to start
```sh
docker network create --opt encrypted --driver overlay --attachable dev-net
docker create \
    --name zuul \
    --network dev-net \
    --rm \
    loxonsolutions/meetup-devops-zuul:latest

docker start zuul 
```