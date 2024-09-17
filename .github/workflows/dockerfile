# Step 1: Use Node.js official image as the base image
FROM node:18-alpine

# Step 2: Set the working directory inside the container
WORKDIR /app

# Step 3: Copy the package.json and package-lock.json to the working directory
COPY package*.json ./

# Step 4: Install the dependencies
RUN npm install

# Step 5: Copy the entire project to the working directory
COPY . .

# Step 6: Expose the port Vite uses (default is 5173)
EXPOSE 5173

# Step 7: Set the command to run the Vite development server
CMD ["npm", "run", "build", "--", "--host"]
