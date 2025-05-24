# Stage 1 - Builder
FROM node:18 AS builder

WORKDIR /app
COPY . .
RUN npm install --production

# Stage 2 - Runner
FROM node:18-slim

WORKDIR /app
COPY --from=builder /app ./

ENV NODE_ENV=production
EXPOSE 4500

CMD ["node", "src/index.js"]


#################################################

# # Stage 1: Base Node image
# FROM node:18

# WORKDIR /app

# COPY package*.json ./
# RUN npm install

# COPY . .

# ENV DB_HOST=mern_mysql
# ENV DB_USER=root
# ENV DB_PASSWORD=root
# ENV DB_NAME=mern

# EXPOSE 4500

# CMD ["node", "src/index.js"]