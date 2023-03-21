FROM node:19.7.0-alpine3.17
RUN apk --update --no-cache add bash nano

RUN npm install -g @webosose/ares-cli

WORKDIR /var/www

ADD docker-init.sh /home/
RUN chmod +x /home/docker-init.sh
CMD bash /home/docker-init.sh
