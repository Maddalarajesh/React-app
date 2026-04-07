#Choose a base image
FROM node

# Set the working dir when our container executes
WORKDIR /usr/src/app

# Copy the full of our applications bundles
COPY . /usr/src/app

# Install our packages
RUN npm install
RUN npm run build
EXPOSE 3000

# Set start command
CMD [ "npm", "start" ]
