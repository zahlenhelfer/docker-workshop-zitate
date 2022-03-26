FROM node:14 AS backend-build
RUN git clone https://github.com/zahlenhelfer/docker-workshop-zitate.git
WORKDIR /docker-workshop-zitate/backend
RUN npm i -g @nestjs/cli
RUN npm ci && npm run build

FROM node:14-alpine AS backend-server
COPY --from=backend-build /docker-workshop-zitate/backend/dist/ /app/
COPY --from=backend-build /docker-workshop-zitate/backend/package.json /app/
COPY --from=backend-build /docker-workshop-zitate/backend/package-lock.json /app/
COPY --from=backend-build /docker-workshop-zitate/backend/data /data
WORKDIR /app
RUN npm ci
CMD ["node", "main.js"]
