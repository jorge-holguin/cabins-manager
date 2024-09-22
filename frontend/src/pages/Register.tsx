// src/pages/Register.tsx

import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { TextField, Button, Container, Typography } from '@mui/material';
import { useAuth } from '../hooks/useAuth';

const Register: React.FC = () => {
  const { register } = useAuth();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await register(name, email, password);
      navigate('/dashboard');
    } catch (error) {
      console.error('Register error:', error);
      alert('Error during registration');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Container maxWidth="sm" className="bg-white p-8 shadow-lg rounded-lg">
        <Typography variant="h4" gutterBottom>
          Registrarse
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Nombre"
            fullWidth
            margin="normal"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <TextField
            label="Correo Electrónico"
            type="email"
            fullWidth
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <TextField
            label="Contraseña"
            type="password"
            fullWidth
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Button variant="contained" color="primary" type="submit" fullWidth className="mt-4">
            Registrarse
          </Button>
        </form>
        <Typography variant="body2" align="center" className="mt-2">
          ¿Ya tienes una cuenta? <Link to="/">Inicia sesión aquí</Link>
        </Typography>
      </Container>
    </div>
  );
};

export default Register;
