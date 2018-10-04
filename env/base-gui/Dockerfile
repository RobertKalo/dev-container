FROM ubuntu:18.04

# Setup developer user in OS
RUN groupadd -g 1000 developer && \
    useradd -p developer --home-dir /home/developer --gid 1000 --groups root --create-home --uid 1000 developer && \
    mkdir -p /etc/sudoers.d && echo "developer ALL=(ALL) NOPASSWD: ALL" > /etc/sudoers.d/developer
ENV HOME /home/developer
WORKDIR /home/developer
RUN chown -R developer /home/developer

# Install OS dependencies
RUN apt-get update && \
    apt-get upgrade -y && \
    apt-get install -y libxext-dev libxrender-dev libxtst-dev wget curl && \
    rm -rf /var/lib/apt/lists/*
