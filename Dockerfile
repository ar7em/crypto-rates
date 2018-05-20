FROM node:8.11
USER root

ADD . /app
WORKDIR /app

RUN npm install
EXPOSE 3000
CMD [ "npm", "start" ]
