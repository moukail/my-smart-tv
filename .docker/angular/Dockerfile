FROM node:19.7.0-alpine3.17
RUN apk --update --no-cache add bash nano

RUN echo | npm install -g @angular/cli@15.2.4

WORKDIR /var/www

ADD docker-init.sh /home/
RUN chmod +x /home/docker-init.sh
CMD bash /home/docker-init.sh
