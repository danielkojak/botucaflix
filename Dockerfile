FROM node:14

WORKDIR /app

ENV NODE_ENV=${NODE_ENV}

COPY package*.json .

RUN npm install

COPY . .

ENTRYPOINT [ "npm", "run" ]
CMD ["start"]