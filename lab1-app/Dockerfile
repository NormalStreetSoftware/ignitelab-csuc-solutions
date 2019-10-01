### [tester] 
## Test stage
FROM node:12.10 as test

WORKDIR /app

COPY package*.json .eslintrc.js ./

RUN npm install

COPY test ./test
COPY app.js ./

RUN npm test

### [tester] 

### [builder] 
## Builder stage
FROM node:12.10 as builder

WORKDIR /app

COPY --from=test /root/.npm /root/.npm
COPY package*.json ./

RUN npm install --prod

### [builder] 

### [runner] 
## Run Node.js application stage
FROM node:12.10

WORKDIR /app

COPY --from=builder /app/node_modules ./node_modules/
COPY app.js ./

ENTRYPOINT ["node", "app.js"]
### [runner] 
