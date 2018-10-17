# Spring STS 4 in Docker

## Sample create
```sh
docker network create --opt encrypted --driver overlay --attachable dev-net

docker create \
    --name idea \
    --network dev-net \
    --rm \
    -e DISPLAY=$DISPLAY \
    -v /var/run/docker.sock:/var/run/docker.sock \
    -v /tmp/.X11-unix:/tmp/.X11-unix \
    -v $HOME/.idea/.IntelliJIdea2018.2:/home/developer/.IntelliJIdea2018.2 \
    -v $HOME/workspace:/home/developer/workspace \
    -v $HOME/workspace/meetup/.m2:/home/developer/.m2 \
    -v $HOME/.docker:/home/developer/.docker \
    loxonsolutions/meetup-gui-idea:2018.2.4

docker start idea
```
