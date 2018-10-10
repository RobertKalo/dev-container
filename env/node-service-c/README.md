# Node based Runtime environment

## Sample create
```sh
docker network create --opt encrypted --driver overlay --attachable dev-net
docker create \
    --rm --name node \
    --network dev-net \
    -v $HOME/workspace/meetup/dev-container/app1/service-node-c:/tmp/code \
    loxonsolutions/meetup-node-runtime:latest
docker start node
```
