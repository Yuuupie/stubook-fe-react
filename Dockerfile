FROM node:alpine as builder

WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
ENV NODE_OPTIONS --openssl-legacy-provider
COPY package.json .
COPY package-lock.json .
RUN npm ci
COPY src ./src
COPY public ./public
COPY .env.production .
RUN npm run build


FROM nginx:latest

COPY --from=builder /app/build /usr/share/nginx/html
COPY ssl/yuuupie.xyz /etc/letsencrypt/live/yuuupie.xyz
COPY ssl/options-ssl-nginx.conf /etc/letsencrypt
COPY ssl/ssl-dhparams.pem /etc/letsencrypt
COPY nginx.conf /etc/nginx/nginx.conf

