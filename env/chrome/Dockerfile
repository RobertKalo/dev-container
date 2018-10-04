FROM loxon/meetup-gui-base:ubuntu-18.04

RUN apt-get update && \
    apt-get install -y gnupg2 && \
    echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" > /etc/apt/sources.list.d/google.chrome.list && \
    wget -q https://dl.google.com/linux/linux_signing_key.pub -O- | apt-key add - && \
    apt-get update && \
    apt-get install -y google-chrome-stable && \
    rm -rf /var/lib/apt/lists/*

USER developer

CMD /usr/bin/google-chrome-stable
