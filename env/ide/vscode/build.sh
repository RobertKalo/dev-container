#!/bin/bash

docker build -t loxon/meetup-gui-vcode:latest .
docker push loxon/meetup-gui-vcode:latest
