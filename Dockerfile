# build environment
FROM node:16.10-alpine as build
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json ./
COPY package-lock.json ./
RUN npm ci --silent
RUN npm install react-scripts@3.4.1 -g --silent
COPY . ./
ADD .env.tmpl .env
RUN npm run build

# production environment
FROM nginx:stable-alpine
COPY --from=build /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
RUN apk add --no-cache bash
WORKDIR /usr/share/nginx/html
EXPOSE 3000
CMD ["/bin/bash", "-c", "nginx -g \"daemon off;\""]
