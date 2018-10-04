# Spring STS 4 in Docker

## Sample create
```sh
docker network create --opt encrypted --driver overlay --attachable dev-net
docker create \
    --name sts4 \
    --network dev-net \
    --rm \
    -e DISPLAY=$DISPLAY \
    -v /tmp/.X11-unix:/tmp/.X11-unix \
    -v $HOME/workspace:/home/developer/workspace \
    -v $HOME/workspace/meetup/.m2:/home/developer/.m2 \
    -v $HOME/workspace/meetup/dev-container/env/ide/eclipse-STS/resource/.sts-ws:/home/developer/.sts-ws \ # remove this line
    loxon/meetup-gui-sts:4

docker start sts4
```