FROM node:14.17-alpine3.12
WORKDIR /app

build:
    COPY package.json package-lock.json ./
    COPY --if-exists --dir node_modules ./
    RUN npm install
    COPY --dir src ./
    SAVE ARTIFACT --force node_modules AS LOCAL ./node_modules
    SAVE ARTIFACT --force package.json AS LOCAL ./package.json
    SAVE ARTIFACT --force package-lock.json AS LOCAL ./package-lock.json

tests:
    FROM +build
    COPY --dir spec ./
    RUN npm test

lint:
    FROM +build
    COPY .jshintrc ./
    RUN npm run lint

integration-tests:
    FROM +build
    COPY docker-compose.yml ./
    COPY --dir integration-tests ./
    WITH DOCKER --compose docker-compose.yml --service db
        RUN sleep 10 && npm run integration-tests
    END

docker:
    FROM +build
    RUN npm install --only=production
    EXPOSE 3000
    ENTRYPOINT ["npm", "start"]
    SAVE IMAGE semaphore-demo-earthly:latest
