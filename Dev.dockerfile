FROM node:12.13.0-alpine
LABEL maintainer "Ben Saufley<contact@bensaufley.com>"

ARG NODE_ENV=development
ENV NODE_ENV "${NODE_ENV}"

WORKDIR /tmp
COPY package.json package-lock.json ./
RUN npm i

WORKDIR /usr/src/pgql-api
RUN cp -a /tmp/package.json /tmp/package-lock.json /tmp/node_modules ./
COPY . .
