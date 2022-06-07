FROM node:12.18.1

WORKDIR /app

COPY package.json package-lock.json ./

COPY . .

EXPOSE 3000

CMD [ "npm", "start" ]
