FROM node:12 AS build

WORKDIR /usr/src/app

COPY package.json package-lock.json /usr/src/app/

RUN npm i --production --no-audit --loglevel silent

COPY . .
ARG NODE_ENV
RUN NODE_ENV=$NODE_ENV npm run build

FROM nginx:1.16-alpine

EXPOSE 8080

COPY templates/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /usr/src/app/web /var/www
