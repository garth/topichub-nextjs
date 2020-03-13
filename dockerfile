FROM node:12-alpine
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY . /usr/src/app/
RUN yarn install
RUN yarn build
RUN yarn install --production
EXPOSE 3000
CMD [ "yarn", "start:prod" ]
