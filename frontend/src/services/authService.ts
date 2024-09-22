// src/services/authService.ts
import api from './api';

export const login = async (email: string, password: string): Promise<string> => {
  try {
    const response = await api.post('/auth/login', { email, password });
    const { token } = response.data;
    return token;
  } catch (error: any) {
    console.error('Error durante el login:', error);
    throw error;
  }
};

export const register = async (name: string, email: string, password: string): Promise<string> => {
  const response = await api.post('/auth/register', { name, email, password });
  const { token } = response.data;
  return token;
};