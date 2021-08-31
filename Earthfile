FROM node:14.17-alpine3.12
WORKDIR /app

build:
    COPY package.json ./
    COPY package-lock.json ./
    RUN npm install
    COPY src src

lockfile-update:
    FROM +build
    SAVE ARTIFACT package.json AS LOCAL ./package.json
    SAVE ARTIFACT package-lock.json AS LOCAL ./package-lock.json

tests:
    FROM +build
    COPY spec spec
    RUN npm test

lint:
    FROM +build
    COPY .jshintrc .jshintrc
    RUN npm run lint

integration-tests:
    FROM +build
    COPY docker-compose.yml docker-compose.yml
    COPY integration-tests integration-tests
    WITH DOCKER --compose docker-compose.yml --service db
        RUN sleep 10 && npm run integration-tests
    END

docker:
    FROM +build
    RUN npm install --only=production
    # COPY +build/dist ./dist
    # COPY src src
    EXPOSE 3000
    ENTRYPOINT ["npm", "start"]
    SAVE IMAGE semaphore-demo-earthly:latest