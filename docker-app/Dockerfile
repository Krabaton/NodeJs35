FROM node:16

WORKDIR /usr/src/app

COPY package*.json .

RUN npm i

COPY . .

EXPOSE 7000

CMD ["node", "app.js"]