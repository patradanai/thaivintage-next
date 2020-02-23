##
#       BUILD
##
FROM node:latest AS builder

WORKDIR /build

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build && rm -rf .next/cache

###
# Exec Stage
###

FROM node:latest

WORKDIR /src

COPY package*.json ./

RUN npm install --only=production

COPY --from=builder /build/.next .next

COPY next.config.js .

CMD ["npm","run","start"]