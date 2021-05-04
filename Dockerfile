#Primera Etapa
FROM node:10-alpine as build-step

RUN mkdir -p /app

WORKDIR /app

COPY  ZuperApp/package.json /app

RUN npm install

COPY . /app

RUN npm run build --prod

#Segunda Etapa
FROM nginx:1.17.1-alpine

COPY --from=build-step /app/dist/ZuperApp /usr/share/nginx/html
