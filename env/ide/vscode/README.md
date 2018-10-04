# Spring STS 4 in Docker

## Sample create
```sh
docker network create --opt encrypted --driver overlay --attachable dev-net
docker create \
    --name vcode \
    --rm \
    --network dev-net \
    -e DISPLAY=$DISPLAY \
    -v /tmp/.X11-unix:/tmp/.X11-unix \
    loxon/meetup-gui-vcode:latest

docker start vcode
```
