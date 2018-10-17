FROM loxonsolutions/meetup-gui-base:ubuntu-18.04

# Install OS dependencies
RUN apt-get update && \
    apt-get install -y openjdk-8-jdk apt-transport-https ca-certificates curl software-properties-common && \
    curl -fsSL https://download.docker.com/linux/ubuntu/gpg | apt-key add - && \
    add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" && \
    apt-get update && \
    apt-get install -y docker-ce && \
    usermod -aG docker developer && \
    rm -rf /var/lib/apt/lists/*

USER developer

# Install Intellij
RUN curl -o /tmp/idea.tar.gz https://download-cf.jetbrains.com/idea/ideaIU-2018.2.4.tar.gz && \
    tar -xvzf /tmp/idea.tar.gz && \
    rm -rf /tmp/idea.tar.gz && \
    mv idea-IU* idea && \
    mkdir -p /home/developer/workspace && mkdir -p /home/developer/.m2

VOLUME ["/home/developer/workspace", "/home/developer/.m2"]

CMD /home/developer/idea/bin/idea.sh
