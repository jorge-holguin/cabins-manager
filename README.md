
# **CRM Cybercafé**

Un sistema de gestión (CRM) para un cybercafé, desarrollado con Node.js, Express, TypeScript, React, Vite, Tailwind CSS, Material UI y Lucide Icons.

## **Tabla de Contenidos**

- [**CRM Cybercafé**](#crm-cybercafé)
  - [**Tabla de Contenidos**](#tabla-de-contenidos)
  - [**Descripción**](#descripción)
  - [**Características**](#características)
  - [**Demostración**](#demostración)
  - [**Tecnologías Utilizadas**](#tecnologías-utilizadas)
    - [**Backend**](#backend)
    - [**Frontend**](#frontend)
  - [**Requisitos Previos**](#requisitos-previos)
  - [**Instalación**](#instalación)
    - [**Backend**](#backend-1)
    - [**Frontend**](#frontend-1)
  - [**Estructura del Proyecto**](#estructura-del-proyecto)
  - [**Uso**](#uso)
  - [**Contribución**](#contribución)
  - [**Licencia**](#licencia)
  - [**Contacto**](#contacto)
  - [**Agradecimientos**](#agradecimientos)

---

## **Descripción**

Este proyecto es una aplicación CRM diseñada para gestionar las operaciones de un cybercafé. Permite al administrador y empleados llevar el control de las cabinas, gestionar gastos, generar reportes financieros y más.

---

## **Características**

- **Gestión de Cabinas**: Iniciar y detener el uso de cabinas, seguimiento de tiempos y tarifas.
- **Control de Gastos**: Registro y seguimiento de gastos fijos y variables.
- **Reportes Financieros**: Generación de reportes de ingresos y gastos, accesible solo para administradores.
- **Autenticación y Autorización**: Sistema de login y registro con roles de usuario (administrador y empleado).
- **Interfaz de Usuario Profesional**: Diseño moderno utilizando Tailwind CSS, Material UI y Lucide Icons.

---

## **Demostración**

*Nota: Aquí puedes incluir capturas de pantalla o enlaces a una demo en vivo si está disponible.*

---

## **Tecnologías Utilizadas**

### **Backend**

- **Node.js**: Entorno de ejecución para JavaScript en el servidor.
- **Express**: Framework web para Node.js.
- **TypeScript**: Superconjunto de JavaScript que añade tipado estático.
- **Sequelize**: ORM para bases de datos SQL.
- **JWT**: Autenticación basada en tokens JSON Web Tokens.
- **bcrypt**: Para hash de contraseñas.
- **cors**: Middleware para habilitar CORS.
- **dotenv**: Carga variables de entorno desde un archivo `.env`.

### **Frontend**

- **React**: Biblioteca para construir interfaces de usuario.
- **Vite**: Herramienta de desarrollo rápida para proyectos web modernos.
- **TypeScript**: Tipado estático para JavaScript.
- **Tailwind CSS**: Framework de CSS utilitario.
- **Material UI**: Componentes de interfaz de usuario para React.
- **Lucide React**: Paquete de íconos para React.
- **Axios**: Cliente HTTP para hacer solicitudes a la API.
- **React Router DOM**: Enrutamiento para aplicaciones React.
- **Recharts**: Biblioteca para crear gráficos y visualizaciones de datos.

---

## **Requisitos Previos**

- **Node.js**: Versión 14 o superior.
- **npm**: Administrador de paquetes de Node.js.
- **Base de Datos**: MySQL o cualquier base de datos compatible con Sequelize.

---

## **Instalación**

### **Backend**

1. **Clonar el repositorio**

   ```bash
   git clone https://github.com/tu_usuario/tu_repositorio.git
   ```

2. **Navegar al directorio del backend**

   ```bash
   cd tu_repositorio/backend
   ```

3. **Instalar dependencias**

   ```bash
   npm install
   ```

4. **Configurar variables de entorno**

   Crea un archivo `.env` en la raíz del directorio `backend` con el siguiente contenido:

   ```env
   PORT=3000
   DB_HOST=localhost
   DB_USER=tu_usuario
   DB_PASSWORD=tu_contraseña
   DB_NAME=nombre_de_la_base_de_datos
   JWT_SECRET=tu_secreto_jwt
   ```

5. **Ejecutar migraciones y sembrar datos (opcional)**

   Si utilizas Sequelize CLI:

   ```bash
   npx sequelize db:migrate
   npx sequelize db:seed:all
   ```

6. **Iniciar el servidor**

   ```bash
   npm run dev
   ```

### **Frontend**

1. **Navegar al directorio del frontend**

   ```bash
   cd ../frontend
   ```

2. **Instalar dependencias**

   ```bash
   npm install
   ```

3. **Configurar variables de entorno**

   Crea un archivo `.env` en la raíz del directorio `frontend` con el siguiente contenido:

   ```env
   VITE_API_URL=http://localhost:3000/api
   ```

4. **Iniciar la aplicación**

   ```bash
   npm run dev
   ```

---

## **Estructura del Proyecto**

```bash
/backend
  ├── src
  │   ├── controllers
  │   ├── models
  │   ├── routes
  │   ├── middleware
  │   ├── services
  │   ├── app.ts
  │   └── server.ts
  ├── package.json
  └── tsconfig.json
/frontend
  ├── src
  │   ├── assets
  │   ├── components
  │   ├── contexts
  │   ├── hooks
  │   ├── pages
  │   ├── routes
  │   ├── services
  │   ├── types
  │   ├── App.tsx
  │   ├── main.tsx
  │   └── index.css
  ├── package.json
  ├── tsconfig.json
  └── vite.config.ts
```

---

## **Uso**

1. **Iniciar Sesión**

   - Accede a `http://localhost:5173` en tu navegador.
   - Ingresa tus credenciales para iniciar sesión.

2. **Navegar por el Dashboard**

   - **Cabinas**: Gestiona el uso de las cabinas.
   - **Gastos**: Registra y visualiza los gastos.
   - **Reportes**: Visualiza reportes financieros (solo para administradores).

3. **Registro de Usuarios**

   - Si no tienes una cuenta, puedes registrarte desde la página de registro.

---

## **Contribución**

¡Las contribuciones son bienvenidas! Por favor, sigue los siguientes pasos:

1. **Fork el repositorio**
2. **Crea una rama para tu función o corrección de bug**

   ```bash
   git checkout -b feature/nueva-funcionalidad
   ```

3. **Realiza tus cambios y commitea**

   ```bash
   git commit -m 'Agrega nueva funcionalidad'
   ```

4. **Push a la rama**

   ```bash
   git push origin feature/nueva-funcionalidad
   ```

5. **Abre un Pull Request**

---

## **Licencia**

Este proyecto está licenciado bajo la licencia MIT. Consulta el archivo [LICENSE](LICENSE) para más detalles.

---

## **Contacto**

- **Nombre**: Tu Nombre
- **Email**: tuemail@example.com
- **GitHub**: [jorge_holguin](https://github.com/jorge_holguin)

---

## **Agradecimientos**

- A todas las personas y recursos que contribuyeron al desarrollo de este proyecto.

---

