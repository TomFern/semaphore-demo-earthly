FROM node:13.10.1-alpine3.11
WORKDIR /app

deps:
    COPY package.json ./
    COPY package-lock.json ./
    # RUN npm add express
    RUN npm install
    SAVE ARTIFACT package.json AS LOCAL ./package.json
    SAVE ARTIFACT package-lock.json AS LOCAL ./package-lock.json

update-deps:
    FROM +deps
    RUN npm update 
    SAVE ARTIFACT package.json AS LOCAL ./package.json
    SAVE ARTIFACT package-lock.json AS LOCAL ./package-lock.json

unit-tests:
    FROM +deps
    COPY src src
    COPY spec spec
    RUN npm test

deps-prod:
    COPY package.json ./
    COPY package-lock.json ./
    RUN npm install --only=production
    #SAVE ARTIFACT package.json AS LOCAL ./package.json
    #SAVE ARTIFACT package-lock.json AS LOCAL ./package-lock.json

build:
    FROM +deps-prod
    COPY src src
    RUN mkdir -p ./dist && cp ./src/* ./dist/
    RUN npx webpack
    SAVE ARTIFACT dist /dist AS LOCAL dist

docker:
    FROM +deps-prod
    # COPY +build/dist ./dist
    COPY src src
    EXPOSE 3000
    ENTRYPOINT ["npm", "start"]
    SAVE IMAGE myapp2:latest