FROM node:10-alpine  as builder
RUN mkdir /app
WORKDIR /app
COPY package.json /app/package.json
COPY package-lock.json /app/package-lock.json
COPY ./src/ /app/src
COPY ./public/ /app/public
RUN npm install --silent
ENV REACT_APP_API_URL=http://localhost:3000
RUN npm run build

# production environment
FROM nginx:alpine
COPY --from=builder /app/build /usr/share/nginx/html
