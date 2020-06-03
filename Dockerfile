FROM node:12 as builder

RUN npm install --quiet node-gyp -g && npm i typescript -g

WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
RUN tsc

FROM node:12-alpine
WORKDIR /usr/src/app
RUN ls -la
COPY --chown=33:33 --from=builder /usr/src/app/build ./
RUN ls -la

EXPOSE $PORT
CMD [ "node", "server.js" ]
