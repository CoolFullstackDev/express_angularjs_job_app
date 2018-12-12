# Dockerfile
# The FROM directive sets the Base Image for subsequent instructions
FROM node:carbon
USER root
# Comment
RUN echo 'Starting Docker'

RUN mkdir -p /taskoli

WORKDIR /taskoli

COPY package*.json ./

RUN npm install -g pm2

RUN npm install

COPY . ./

EXPOSE 80

CMD [ "npm", "run", "production" ]

# Comment
RUN echo 'Completed Docker'