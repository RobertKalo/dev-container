#!/bin/bash

docker build -t loxon/meetup-gui-chrome:latest .
docker push loxon/meetup-gui-chrome:latest
