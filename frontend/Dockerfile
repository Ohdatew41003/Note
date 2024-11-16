FROM node:14-alpine

WORKDIR /app

# Cài đặt các phụ thuộc của ứng dụng
COPY package*.json ./
RUN npm install

# Sao chép mã nguồn vào container
COPY . .

EXPOSE 3000

CMD ["npm", "start"]
