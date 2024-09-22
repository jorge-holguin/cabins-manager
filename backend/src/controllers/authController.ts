// src/controllers/authController.ts

import { Request, Response } from 'express';
import User from '../models/User';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const login = async (req: Request, res: Response) => {
  try {
    // Log para verificar los datos recibidos
    console.log('Datos recibidos en el login:', req.body);

    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password are required.' });
    }

    // Verificar si el usuario existe
    const user = await User.findOne({ where: { email } });
    if (!user)
      return res.status(400).json({ message: 'User not found' });

    // Comparar contraseñas
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword)
      return res.status(400).json({ message: 'Incorrect password' });

    // Generar JWT
    const token = jwt.sign(
      { id: user.id, role: user.role },
      process.env.JWT_SECRET || 'secret',
      { expiresIn: '1d' }
    );

    res.json({ token });
  } catch (error) {
    console.error('Error durante el login:', error);
    res.status(500).json({ message: 'Error during login', error });
  }
};

export const register = async (req: Request, res: Response) => {
  try {
    // Verificar si el solicitante es un administrador
    if (req.userRole !== 'admin') {
      return res.status(403).json({ message: 'Access denied' });
    }

    const { name, email, password, role } = req.body;

    // Verificar si el usuario ya existe
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser)
      return res.status(400).json({ message: 'Email already in use' });

    // Hashear contraseña
    const hashedPassword = await bcrypt.hash(password, 10);

    // Crear nuevo usuario
    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
      role: role || 'employee',
    });

    res.status(201).json({
      message: 'User registered successfully',
      user: { id: newUser.id, name: newUser.name, email: newUser.email, role: newUser.role },
    });
  } catch (error) {
    res.status(500).json({ message: 'Error during registration', error });
  }
};
