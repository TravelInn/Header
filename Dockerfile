# What image do you want to start building on?
FROM node:latest

# Make a folder in your image where your app's source code can live
RUN mkdir -p /src/headerApp

# Tell your container where your app's source code will live
WORKDIR /src/headerApp

# What source code do you what to copy, and where to put it?
COPY . /src/headerApp

# Does your app have any dependencies that should be installed?
RUN npm install

# What port will the container talk to the outside world with once created?
EXPOSE 3001

# How do you start your app?
CMD ["npm", "start"]
