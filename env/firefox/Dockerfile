FROM loxonsolutions/meetup-gui-base:ubuntu-18.04

# Install OS dependencies
RUN apt-get update && \
    apt-get install -y firefox && \
    rm -rf /var/lib/apt/lists/*

USER developer

CMD /usr/bin/firefox
