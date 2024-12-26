FROM node:20.10.0-slim AS builder

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

FROM node:20.10.0-slim AS runner

WORKDIR /usr/src/app

COPY --from=builder /usr/src/app/dist ./dist
COPY --from=builder /usr/src/app/package*.json ./

RUN npm install --only=production
RUN npm install pm2 -g

EXPOSE 3000

CMD ["pm2-runtime", "start", "dist/server.js"]