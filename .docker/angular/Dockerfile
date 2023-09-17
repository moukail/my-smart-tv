FROM node:20.6-alpine3.18

RUN apk --update --no-cache add bash nano

RUN echo | npm install -g @angular/cli@15.2.4

WORKDIR /var/www

ADD docker-init.sh /home/
RUN chmod +x /home/docker-init.sh
CMD bash /home/docker-init.sh
