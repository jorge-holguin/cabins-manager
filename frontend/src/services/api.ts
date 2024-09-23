import axios from 'axios';

// Usa la variable VITE_API_URL o, si no está definida, utiliza window.location.origin como fallback
const API_URL = import.meta.env.VITE_API_URL || `${window.location.origin}/api`;

const api = axios.create({
  baseURL: API_URL, // La baseURL será la proporcionada por VITE_API_URL o el origen del sitio
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token'); // Obtener el token del localStorage
  if (token && config.headers) {
    config.headers['Authorization'] = `Bearer ${token}`; // Agregar el token a las cabeceras de la solicitud
  }
  return config;
});

export default api;
