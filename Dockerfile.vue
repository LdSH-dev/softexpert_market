FROM node:latest

COPY ./resources /app

WORKDIR /app

RUN npm install
RUN npm install --save-dev jest @vue/test-utils vue-jest

EXPOSE 8080

CMD ["npm", "run", "serve"]
