#!/bin/bash

docker build -t loxon/meetup-gui-firefox:latest .
docker push loxon/meetup-gui-firefox:latest
