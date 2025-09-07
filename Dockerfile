FROM node:20-alpine
WORKDIR /app
COPY app/package*.json ./
RUN npm ci --omit=dev || npm install --omit=dev
COPY app ./
EXPOSE 8080
ENV PORT=8080 APP_ENV=dev
CMD ["npm", "start"]
