FROM node:22.19.0-alpine

# Building application.
WORKDIR /app
COPY . .
RUN npm install

# Run setup.
EXPOSE 3000
CMD ["npm", "start"]