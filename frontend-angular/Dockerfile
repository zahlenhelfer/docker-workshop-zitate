FROM node:14 AS frontend-build
RUN npm install -g @angular/cli
WORKDIR /docker-workshop-zitate/frontend
RUN npm ci && ng build --configuration production

FROM nginx:stable AS frontend-server
COPY --from=ui-build /docker-workshop-zitate/frontend-angular/dist/ZitateApp/ /usr/share/nginx/html
