# # Use an official Node.js image
# FROM node:18-alpine

# # Set working directory
# WORKDIR /app

# # Copy the JS file
# COPY . .

# # Run the app
# CMD ["node", "index.js"]


# Stage 1: build
FROM node:18-alpine AS builder
WORKDIR /app
COPY . .
# RUN npm install

# Stage 2: run
#distroless image is image without disto hence small size
FROM gcr.io/distroless/nodejs:18
WORKDIR /app
COPY --from=builder /app .

CMD ["node", "index.js"]


