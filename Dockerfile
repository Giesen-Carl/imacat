FROM node:alpine
RUN mkdir /app
WORKDIR /app
COPY . .
RUN npm install
CMD ["node", "express.js"]
EXPOSE 3000