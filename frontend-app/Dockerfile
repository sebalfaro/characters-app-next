FROM node:18-alpine as dev
WORKDIR /app
COPY package*.json ./
RUN npm install
CMD ["npm", "run", "dev"]

FROM node:18-alpine AS builder
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:18-alpine as prod
WORKDIR /app
ENV NODE_ENV production
COPY --from=builder /usr/src/app/.next ./.next
COPY --from=builder /usr/src/app/node_modules ./node_modules
COPY --from=builder /usr/src/app/package.json ./package.json
EXPOSE 3000
CMD ["npm", "start"]
