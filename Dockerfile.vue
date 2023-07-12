FROM node:latest

COPY ./resources /app

WORKDIR /app

RUN npm install

EXPOSE 8080

CMD ["npm", "run", "serve"]
