FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 4500

CMD ["node", "index.js"]

###########################################################################
# Here is confusion that why cant we write as
# COPY . .
# RUN npm install

# instead of
# COPY package*.json ./
# RUN npm install
# COPY . .


# So basically COPY . . before RUN npm install is less optimal
# 1] When we do COPY . . before RUN npm install, Docker copies all your source code first, 
# including files that might rarely change (e.g., HTML, JS files, etc.).
# 2] That means Docker cache for npm install breaks every time any file changes — even if package.json hasn't changed.
# 3] So Docker re-runs npm install unnecessarily.

# Thats why 
# COPY package*.json ./
# RUN npm install
# COPY . .
# this structure is better

# as if our code changes but package.json doesn't, Docker uses cache for npm install — so builds are much faster.