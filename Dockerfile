FROM node:14-alpine
WORKDIR /
COPY . .
RUN yarn install --production
CMD ["yarn", "start"]
EXPOSE 3000
