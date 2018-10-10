# Java based Service B

## How to start
```sh
docker network create --opt encrypted --driver overlay --attachable dev-net
docker create \
    --name service-b-wildfly \
    --network dev-net \
    --rm \
    loxonsolutions/meetup-devops-service-java8-b:latest

docker start service-b-wildfly 
```
