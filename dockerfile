# Stage 1: Build the Next.js application
FROM node:20-alpine AS builder

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Build the Next.js application
RUN npm run build

# Stage 2: Set up Apache and copy built application
FROM httpd:2.4

# Enable proxy modules
RUN sed -i '/#LoadModule proxy_module/s/^#//g' /usr/local/apache2/conf/httpd.conf \
    && sed -i '/#LoadModule proxy_http_module/s/^#//g' /usr/local/apache2/conf/httpd.conf

# Create a virtual host configuration for Apache
COPY apache-config.conf /usr/local/apache2/conf/extra/httpd-vhost.conf
RUN echo "Include /usr/local/apache2/conf/extra/httpd-vhost.conf" >> /usr/local/apache2/conf/httpd.conf

# Copy the built Node.js application from the builder stage to the Apache web server root
COPY --from=builder /app/.next /usr/local/apache2/htdocs

# Expose port 80 (default for Apache)
EXPOSE 80

# Start Apache in the foreground
CMD ["httpd-foreground"]
