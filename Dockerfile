FROM node:10.0
RUN mkdir /app
WORKDIR /app

COPY package*.json ./
COPY .env.tmpconfig .env

RUN npm ci 

COPY . .

RUN npm run build && npm prune --production

ENV NODE_ENV=production
CMD ["npm", "start"]
