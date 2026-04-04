#Choose a base image
FROM node

# Set the working dir when our container execution
WORKDIR /usr/src/app

# Copy the full of our web applications bundles
COPY . /usr/src/app

# Install our packages
RUN npm install
RUN npm run build


EXPOSE 3000

# Set start command
CMD [ "npm", "start" ]
