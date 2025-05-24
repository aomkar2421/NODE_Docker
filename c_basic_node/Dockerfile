FROM node:18-alpine

WORKDIR /app

COPY . .

EXPOSE 4500

CMD ["node", "index.js"]
# i have used this bcz, there is no any deppendency in my project other than nodemon
# which is not used in production
#  and since i am using COPY . . i need top use .dockerignore


###########################################################################


# # Stage 1: build
# FROM node:18-alpine AS builder
# WORKDIR /app
# COPY . .

# # Stage 2: run
# #distroless image is image without disto hence small size
# FROM gcr.io/distroless/nodejs:18
# WORKDIR /app
# COPY --from=builder /app .

# CMD ["node", "index.js"]

#  here distroless is not that much of use to reduce app size as it is usually useful for Large app with many build tools ,
# Dev vs production dependencies	and not for static small node script henche go with alphine image
##################################################################