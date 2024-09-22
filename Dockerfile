# Etapa 1: Construcción del frontend
FROM node:18-alpine as build-frontend
WORKDIR /app/frontend
COPY ./frontend/package*.json ./
RUN npm install
COPY ./frontend ./
RUN npm run build

# Etapa 2: Configuración del backend
FROM node:18-alpine
WORKDIR /app
COPY ./backend/package*.json ./
RUN npm install
COPY ./backend ./

# Transpilar los archivos TypeScript del backend
RUN npm run build 

# Copiar los archivos del frontend transpilados
COPY --from=build-frontend /app/frontend/dist ./public

# Exponer el puerto
EXPOSE 3000

# Iniciar la aplicación
CMD ["npm", "run", "start"]
