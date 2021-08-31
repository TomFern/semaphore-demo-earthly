FROM node:13.10.1-alpine3.11
WORKDIR /app

build:
    COPY package.json ./
    COPY package-lock.json ./
    # RUN npm add pg
    RUN npm install
    COPY src src
    #SAVE ARTIFACT package.json AS LOCAL ./package.json
    #SAVE ARTIFACT package-lock.json AS LOCAL ./package-lock.json

lockfile-update:
    FROM +build
    SAVE ARTIFACT package.json AS LOCAL ./package.json
    SAVE ARTIFACT package-lock.json AS LOCAL ./package-lock.json

unit-tests:
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
    SAVE IMAGE myapp2:latest
