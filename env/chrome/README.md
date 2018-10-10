# Google Chrome in Docker

## Sample create
```sh
docker network create --opt encrypted --driver overlay --attachable dev-net
docker create --rm --name chrome --network dev-net -e DISPLAY=$DISPLAY --shm-size 2g -v /tmp/.X11-unix:/tmp/.X11-unix loxonsolutions/meetup-gui-chrome:latest
docker start chrome
```
