FROM node:11.3.0-alpine
RUN npm install -g http-server yarn

WORKDIR /app

COPY  package.json ./
RUN yarn add @vue/cli-service \
    @vue/cli-plugin-babel \
    yarn add @vue/cli-plugin-eslint

COPY  yarn.lock ./
RUN yarn

COPY . .
RUN yarn run build

EXPOSE 8080
CMD [ "http-server", "dist" ]
