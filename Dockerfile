FROM node:lts-alpine

RUN npm install -g http-server

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 9000

RUN [ "chmod", "+x", "/app/entrypoint.sh" ]
RUN [ "chmod", "+x", "/app/generate_env_file.sh" ]

ENTRYPOINT /app/entrypoint.sh
