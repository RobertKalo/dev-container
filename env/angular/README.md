# Angular based Runtime environment

## Sample create
```sh
docker network create --opt encrypted --driver overlay --attachable dev-net
docker create \
    --rm --name angular \
    --network dev-net \
    -v $HOME/workspace/meetup/dev-container/app1/angular/webapp:/tmp/code \
    loxonsolutions/meetup-node-runtime:latest
docker start angular
```
