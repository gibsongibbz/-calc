# Use an official Node.js runtime as the base image
FROM node:14

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy your application code into the container
COPY . .

# Expose port 3001
EXPOSE 3001

# Start the application
CMD ["node", "investment_calculator.js"]

