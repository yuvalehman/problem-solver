# Dockerfile for NestJS backend
# Use the official Node.js image as the base image
FROM node:20

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the NestJS app
RUN npm run build

# Expose port 3000
EXPOSE 8080

# Start the NestJS server
CMD ["npm", "run", "start:prod"]
