# build environment
FROM node:16.10-alpine as build
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json ./
COPY package-lock.json ./
RUN npm ci --silent
RUN npm install react-scripts@3.4.1 -g --silent
COPY . ./
RUN npm run build

# production environment
FROM nginx:stable-alpine
COPY --from=build /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
# Add bash
RUN apk add --no-cache bash
# Copy .env file and shell script to container
WORKDIR /usr/share/nginx/html
# Environment variables
COPY ./environment.sh .
COPY .env.tmp .
RUN chmod +x environment.sh
# Serve web app 
EXPOSE 3000
CMD ["/bin/bash", "-c", "/usr/share/nginx/html/environment.sh && nginx -g \"daemon off;\""]
