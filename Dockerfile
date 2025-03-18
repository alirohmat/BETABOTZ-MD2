# Gunakan versi Node.js yang lebih stabil dan kompatibel
FROM node:lts-bookworm

# Atur direktori kerja dalam container
WORKDIR /app

# Install dependencies yang dibutuhkan termasuk build tools untuk node-gyp
RUN apt-get update && \
  apt-get install -y \
  ffmpeg \
  imagemagick \
  webp \
  python3 \
  g++ \
  make && \
  apt-get upgrade -y && \
  rm -rf /var/lib/apt/lists/*

# Copy file package.json ke dalam container
COPY package.json .

# Install dependencies dengan flag untuk menghindari error node-gyp
RUN npm install --build-from-source=false && npm rebuild

# Install qrcode-terminal setelahnya untuk memastikan dependensinya tersedia
RUN npm install qrcode-terminal

# Copy seluruh project ke dalam container
COPY . .

# Buka port 5000 jika aplikasi membutuhkan akses dari luar
EXPOSE 5000

# Jalankan aplikasi
CMD ["node", "index.js", "--autoread"]
