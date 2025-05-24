# Use the official lightweight Nginx image
FROM nginx:alpine

# Copy your site files to Nginx's public directory
# it is the default directory where Nginx looks for the website files to serve
COPY . /usr/share/nginx/html

# Expose port 80 to the outside
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]

# Why daemon off?
# Docker containers expect the main process to run in the foreground to keep the container alive. 
# If Nginx runs as a background service (daemon), Docker thinks the container has finished and stops it. 
# This flag keeps Nginx running so the container stays alive and serves your website.