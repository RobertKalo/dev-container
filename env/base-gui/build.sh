#!/bin/bash

docker build -t loxon/meetup-gui-base:ubuntu-18.04 .
docker push loxon/meetup-gui-base:ubuntu-18.04
