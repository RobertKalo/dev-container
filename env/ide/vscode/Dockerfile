FROM loxonsolutions/meetup-gui-base:ubuntu-18.04

# Install VCode
RUN apt-get update && \
    apt-get install -y pgp apt-transport-https libxss1 libasound2 && \
    curl https://packages.microsoft.com/keys/microsoft.asc | gpg --dearmor > microsoft.gpg && \
    install -o root -g root -m 644 microsoft.gpg /etc/apt/trusted.gpg.d/ && \
    echo "deb [arch=amd64] https://packages.microsoft.com/repos/vscode stable main" > /etc/apt/sources.list.d/vscode.list && \
    apt-get update && \
    apt-get install -y code && \
    rm -rf /var/lib/apt/lists/*

USER developer

CMD code /home/developer/workspace
