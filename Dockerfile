FROM node:14

WORKDIR /app

ENV NODE_ENV=${NODE_ENV}

COPY package*.json .

RUN npm install

COPY . .

EXPOSE 3001

ENTRYPOINT [ "npm", "run" ]
CMD ["start"]