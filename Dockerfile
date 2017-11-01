FROM ubuntu:trusty

RUN apt-get update
RUN apt-get -y install curl
RUN curl -sL https://deb.nodesource.com/setup_8.x | sudo bash - 
RUN apt-get -y install python build-essential nodejs nginx
RUN apt-get -y install git

WORKDIR /usr/src/site

COPY package.json .
COPY package-lock.json .

RUN npm i --production

COPY . .
RUN npm run build

COPY templates/nginx.conf /etc/nginx/nginx.conf
RUN echo "daemon off;" >> /etc/nginx/nginx.conf

EXPOSE 80
CMD service nginx start