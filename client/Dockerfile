FROM node:16.14.2-alpine3.15

WORKDIR /app

COPY ["package.json", "package-lock.json", "./"]

RUN npm install --production

COPY . .

EXPOSE 5173

CMD ["npm", "run", "dev"]