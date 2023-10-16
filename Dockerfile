FROM node:18-alpine
WORKDIR /app/api-static
COPY package.json .
RUN npm i
COPY . .
EXPOSE 3503
CMD ["npm", "dev"]