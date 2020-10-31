##
#       BUILD
##
FROM node:latest

WORKDIR /src

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build && rm -rf .next/cache

CMD ["npm","run","start"]