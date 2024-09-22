# Usa una imagen base de Node.js
FROM node:18-alpine as build

# Establece el directorio de trabajo
WORKDIR /app

# Copia el archivo package.json y package-lock.json
COPY package*.json ./

# Instala las dependencias del frontend
RUN npm install

# Copia el resto del código del frontend
COPY . .

# Construye la aplicación de React
RUN npm run build

# Fase para servir el frontend
FROM nginx:alpine

# Copia los archivos estáticos de la build de React al directorio de NGINX
COPY --from=build /app/build /usr/share/nginx/html

# Expone el puerto 80 para servir la aplicación
EXPOSE 80

# Comando para iniciar NGINX
CMD ["nginx", "-g", "daemon off;"]
