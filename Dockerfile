# Pull NGINX stable image from Docker hub
FROM nginx:stable

# Create the folder and copy application files to the folder
COPY . /usr/local/app/ 

# Define the working directory
WORKDIR /usr/local/app

# Copy NGINX configuration file
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Remove default NGINX static content
RUN rm -rf /usr/share/nginx/html/*

# Copy Build files
COPY /dist/angular-app /usr/share/nginx/html

# Expose port
EXPOSE 80

# Start NGINX
CMD ["nginx", "-g", "daemon off;"]
