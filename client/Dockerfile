FROM node:16.14.2-alpine3.15 AS builder

WORKDIR /app

COPY ["package.json", "package-lock.json", "./"]

RUN npm install --production

COPY . .

RUN npm run build

FROM node:16.14.2-alpine3.15

COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/dist ./dist

EXPOSE 5173

CMD ["npm", "run", "preview"]