# syntax=docker/dockerfile:latest
ARG repository=dcr.bndigital.dev/library
ARG version=3.0.0
FROM ${repository}/yarn:${version}
FROM dcr.bndigital.dev/library/yarn:$version AS build
COPY .yarn .yarn
COPY package.json yarn.lock .yarnrc.yml ./
COPY packages/cms/package.json packages/cms/package.json
COPY packages/website/package.json packages/website/package.json
RUN yarn
COPY packages packages
RUN yarn build

FROM ${repository}/nodejs:${version}
WORKDIR /usr/local/src
COPY --from=build /usr/local/src/build .
ENV NODE_ENV=production \
    HOST=0.0.0.0 \
    PORT=5000
EXPOSE 5000
ENTRYPOINT ["node"]
CMD ["node_modules/.bin/strapi", "start"]
