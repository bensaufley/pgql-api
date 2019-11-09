FROM node:12.13.0-alpine AS builder
LABEL maintainer "Ben Saufley<contact@bensaufley.com>"

ENV NODE_ENV development

WORKDIR /tmp
COPY package.json package-lock.json ./
RUN npm i

WORKDIR /usr/src/pgql-api
RUN cp -a /tmp/package.json /tmp/package-lock.json /tmp/node_modules ./
COPY . .

RUN npm run build

FROM node:12.13.0-alpine
LABEL maintainer "Ben Saufley<contact@bensaufley.com>"

ENV NODE_ENV production

WORKDIR /tmp
COPY package.json package-lock.json ./
RUN npm i

WORKDIR /usr/src/pgql-api
RUN cp -a /tmp/package.json /tmp/package-lock.json /tmp/node_modules ./
COPY --from=builder /usr/src/.build .

CMD [ "npm", "start" ]
