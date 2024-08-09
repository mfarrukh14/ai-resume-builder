# Use an official Node.js runtime as a parent image
FROM node:16-alpine

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the React app
RUN npm run build

# Install a simple HTTP server to serve the static content
RUN npm install -g serve

RUN ls -la /app/dist

# Set the command to start the server
CMD ["serve", "-s", "dist"]

# Expose port 3000 to the outside world
EXPOSE 3000
