# pull official base image
FROM node:16.14.2-alpine3.15

# set working directory
WORKDIR /app

# install app dependencies
COPY package.json ./

RUN npm install
# add app
COPY . ./

# expose port the docker runs on
EXPOSE 4000
# start app
CMD ["npm", "start"]