FROM node:14 AS backend-build
WORKDIR /docker-workshop-zitate/backend-nestjs
RUN npm i -g @nestjs/cli
RUN npm ci && npm run build

FROM node:14-alpine AS backend-server
COPY --from=backend-build /docker-workshop-zitate/backend-nestjs/dist/ /app/
COPY --from=backend-build /docker-workshop-zitate/backend-nestjs/package.json /app/
COPY --from=backend-build /docker-workshop-zitate/backend-nestjs/package-lock.json /app/
COPY --from=backend-build /docker-workshop-zitate/backend-nestjs/data /data
WORKDIR /app
RUN npm ci
CMD ["node", "main.js"]
