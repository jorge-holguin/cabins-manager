# Etapa 1: Construcción del frontend
FROM node:18-alpine AS build-frontend

WORKDIR /app/frontend

# Copia los archivos necesarios para construir el frontend
COPY ./frontend/package*.json ./

RUN npm install

# Construir el frontend
COPY ./frontend ./
RUN npm run build

# Etapa 2: Construcción del backend con TypeScript
FROM node:18-alpine

WORKDIR /app

# Copia los archivos del backend
COPY ./backend/package*.json ./

RUN npm install

# Transpila el código TypeScript del backend
COPY ./backend ./
RUN npm run build  # Transpilar el backend a JavaScript

# Copia el frontend generado en la etapa anterior
COPY --from=build-frontend /app/frontend/dist ./public

# Exponer el puerto donde correrá la aplicación
EXPOSE 3000

# Inicia el servidor usando el archivo generado en la carpeta dist
CMD ["node", "dist/server.js"]
