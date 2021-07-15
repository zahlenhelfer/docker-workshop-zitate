FROM node:12 AS ui-build
RUN npm install -g @angular/cli
RUN git clone https://github.com/zahlenhelfer/docker-workshop-zitate.git
WORKDIR /docker-workshop-zitate/frontend
RUN npm ci && ng build --prod

FROM nginx:alpine AS ui-server
COPY --from=ui-build /docker-workshop-zitate/frontend/dist/ZitateApp/ /usr/share/nginx/html
