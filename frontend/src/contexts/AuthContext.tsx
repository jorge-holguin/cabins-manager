// src/contexts/AuthContext.tsx

import React, { createContext, useState, useEffect } from 'react';
import { login as loginService, register as registerService } from '../services/authService';
import { User } from '../types/types';
import { parseJwt } from '../utils/parseJwt';

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      const decoded = parseJwt(token);
      if (decoded) {
        setUser(decoded);
      } else {
        localStorage.removeItem('token');
      }
    }
  }, []);

  const login = async (email: string, password: string) => {
    try {
      const token = await loginService(email, password);
      localStorage.setItem('token', token);
      const decoded = parseJwt(token);
      if (decoded) {
        setUser(decoded);
      } else {
        throw new Error('Invalid token');
      }
    } catch (error) {
      console.error('Error during login:', error);
      // Manejo de errores según sea necesario
    }
  };

  const register = async (name: string, email: string, password: string) => {
    try {
      const token = await registerService(name, email, password);
      localStorage.setItem('token', token);
      const decoded = parseJwt(token);
      if (decoded) {
        setUser(decoded);
      } else {
        throw new Error('Invalid token');
      }
    } catch (error) {
      console.error('Error during registration:', error);
      // Manejo de errores según sea necesario
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('token');
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
