FROM loxon/meetup-gui-base:ubuntu-18.04

# Install OS dependencies
RUN apt-get update && \
    apt-get install -y openjdk-11-jdk apt-transport-https ca-certificates curl software-properties-common && \
    rm -rf /var/lib/apt/lists/*

# Java 9 trust hack
RUN /usr/bin/printf '\xfe\xed\xfe\xed\x00\x00\x00\x02\x00\x00\x00\x00\xe2\x68\x6e\x45\xfb\x43\xdf\xa4\xd9\x92\xdd\x41\xce\xb6\xb2\x1c\x63\x30\xd7\x92' > /etc/ssl/certs/java/cacerts && \
    /var/lib/dpkg/info/ca-certificates-java.postinst configure

USER developer

# Install STS4
RUN curl -o /tmp/sts.tar.gz http://download.springsource.com/release/STS4/4.0.0.RELEASE/dist/e4.9/spring-tool-suite-4-4.0.0.RELEASE-e4.9.0-linux.gtk.x86_64.tar.gz && \
    tar -xvzf /tmp/sts.tar.gz && \
    rm -rf /tmp/sts.tar.gz && \
    mkdir -p /home/developer/workspace

# Configures
RUN mkdir -p /home/developer/.m2
COPY --chown=developer resource/.settings /home/developer/sts-4.0.0.RELEASE/configuration/.settings
COPY --chown=developer resource/.sts-ws /home/developer/.sts-ws

VOLUME ["/home/developer/workspace", "/home/developer/.m2"]

CMD /home/developer/sts-4.0.0.RELEASE/SpringToolSuite4
