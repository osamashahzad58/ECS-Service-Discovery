# Use official Node.js image
FROM node:18

# Create app directory
WORKDIR /app

# Copy package.json first (better for caching)
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy the rest of the project
COPY . .

# Expose the port defined in your .env (default: 3000)
EXPOSE 3000

# Start the app
CMD ["npm", "start"]
