FROM jboss/wildfly

RUN /opt/jboss/wildfly/bin/add-user.sh admin admin123 --silent

ARG JAR_FILE

ENV START_DELAY=3
CMD sleep $START_DELAY && /opt/jboss/wildfly/bin/standalone.sh -b 0.0.0.0

EXPOSE 8080

COPY target/${JAR_FILE} /opt/jboss/wildfly/standalone/deployments/app.war
