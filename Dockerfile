# Pull NGINX stable image from Docker hub
FROM nginx:stable

# Create the folder and copy application files to the folder
COPY . /usr/local/app/ 

# Define the working directory
WORKDIR /usr/local/app

# Install vim editor, top, iftop
RUN apt-get update && apt-get install -y vim procps iftop

# Copy NGINX configuration file
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Remove default NGINX static content
RUN rm -rf /usr/share/nginx/html/*

# Copy Build files
COPY /dist/angular-app /usr/share/nginx/html

# Set the ownership of NGINX directories to the nginx user
RUN chown -R nginx:nginx /var/cache/nginx /var/run /var/log/nginx /usr/share/nginx/html

# Set permission of NGNIX directories
RUN chmod -R 644 /var/run
RUN chmod -R 700 /var/log/nginx /usr/share/nginx/html /var/cache/nginx

# Switch to the nginx user
USER nginx

# Expose port
EXPOSE 80

# Start NGINX
CMD ["nginx", "-g", "daemon off;"]
