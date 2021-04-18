FROM node:current-slim

RUN mkdir /usr/src/app
WORKDIR /usr/src/app

COPY ./package.json .
COPY ./index.js .

VOLUME "./src:/usr/src/app/src:ro"

RUN npm i

EXPOSE 8080

CMD ["npm run", "start"]