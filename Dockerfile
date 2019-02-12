FROM node:11.3.0-alpine as frontendbuilder
RUN npm install -g http-server yarn

WORKDIR /app

COPY  ./webapp/package.json .
RUN yarn add @vue/cli-service \
    @vue/cli-plugin-babel \
    yarn add @vue/cli-plugin-eslint

COPY  ./webapp/yarn.lock .
RUN yarn

COPY ./webapp .
RUN yarn run build

FROM golang:1.10-alpine3.8 AS backendbuilder

RUN apk add git
ADD https://github.com/golang/dep/releases/download/v0.5.0/dep-linux-amd64 /usr/bin/dep
RUN chmod +x /usr/bin/dep

ADD . /go/src/github.com/scibizinformatics/website
WORKDIR /go/src/github.com/scibizinformatics/website
RUN dep ensure --vendor-only -v
RUN go install github.com/scibizinformatics/website

FROM alpine:3.8
RUN apk add ca-certificates
COPY --from=backendbuilder /go/bin/website ./
COPY --from=frontendbuilder /app/dist ./webapp/dist

EXPOSE 9000
CMD ["./website"]
