# Etapa 1: Construcción del frontend
FROM node:18-alpine AS build-frontend
WORKDIR /app/frontend
COPY ./frontend/package*.json ./
RUN npm install
COPY ./frontend ./
RUN npm run build

# Etapa 2: Construcción del backend
FROM node:18-alpine AS build-backend
WORKDIR /app
COPY ./backend/package*.json ./
RUN npm install
COPY ./backend ./

# Copiar los archivos del frontend a la carpeta pública del backend
COPY --from=build-frontend /app/frontend/dist ./public

# Transpilar el backend de TypeScript a JavaScript
RUN npm run build

# Exponer el puerto donde correrá la aplicación
EXPOSE 3000

# Definir la variable de entorno para producción
ENV NODE_ENV production

# Iniciar la aplicación
CMD ["npm", "start"]
