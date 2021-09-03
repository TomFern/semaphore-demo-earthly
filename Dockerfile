FROM node:14.17-alpine3.12
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install --only=production
COPY src src
EXPOSE 3000
ENTRYPOINT ["npm", "start"]
