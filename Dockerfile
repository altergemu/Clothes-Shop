FROM node:alpine as base

ARG ENV

ENV NODE_ENV=${ENV}
LABEL ENV=${ENV}

RUN apk --no-cache add curl

ENV PORT=80
EXPOSE ${PORT}

HEALTHCHECK --interval=5s --timeout=10s --start-period=5s --retries=3 CMD [ "sh", "-c", "curl -f http://localhost:${PORT} || exit 1" ]

FROM base as loading-stage

WORKDIR /project

COPY package.json package-lock.json ./

RUN npm config set registry https://registry.npmjs.org/

RUN mkdir node_modules
RUN [ "sh", "-c", "npm ci", "--no-audit" ]

COPY ./ ./

FROM loading-stage as dev

ENTRYPOINT [ "npm", "run", "dev" ]