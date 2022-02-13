FROM node:14.15.5-alpine3.13 AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY ./ .
ENV VUE_APP_API_BASE_URL "https://vektorprogrammet.no"
ENV VUE_APP_TTS_URL "https://ttsaas.app.vektorprogrammet.no"
RUN npm run build

FROM nginx:mainline-alpine
RUN mkdir /app
COPY --from=builder /app/dist /app
COPY nginx.conf /etc/nginx/nginx.conf
