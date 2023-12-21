# Stage 1: Build Next.js application
FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

# Stage 2: Use Apache to serve the built files
FROM httpd:alpine

# Enable mod_proxy
RUN sed -i '/#LoadModule proxy_module/s/^#//g' /usr/local/apache2/conf/httpd.conf
RUN sed -i '/#LoadModule proxy_http_module/s/^#//g' /usr/local/apache2/conf/httpd.conf

# Copy the built files from the previous stage to the Apache web server's document root
COPY --from=builder /app/.next /usr/local/apache2/htdocs

# Configure Apache to proxy requests to the Next.js application running on port 3000
RUN echo "ProxyPass / http://localhost:3000/" >> /usr/local/apache2/conf/httpd.conf
RUN echo "ProxyPassReverse / http://localhost:3000/" >> /usr/local/apache2/conf/httpd.conf

# Expose the port that Apache will run on
EXPOSE 80

# Start Apache
CMD ["httpd", "-D", "FOREGROUND"]
