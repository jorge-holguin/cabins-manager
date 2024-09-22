// src/app.ts

import express from 'express';
import path from 'path';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Importar rutas
import authRoutes from './routes/authRoutes';
import cabinRoutes from './routes/cabinRoutes';
import usageRecordRoutes from './routes/usageRecordRoutes';
import expenseRoutes from './routes/expenseRoutes';
import partnerRoutes from './routes/partnerRoutes';
import reportRoutes from './routes/reportRoutes';

// Usar rutas
app.use('/api/auth', authRoutes);
app.use('/api/cabins', cabinRoutes);
app.use('/api/usage-records', usageRecordRoutes);
app.use('/api/expenses', expenseRoutes);
app.use('/api/partners', partnerRoutes);
app.use('/api/reports', reportRoutes);

// Servir archivos estáticos desde el frontend
app.use(express.static(path.join(__dirname, '..', 'public')));

// Middleware de manejo de errores
import { errorHandler } from './middlewares/errorHandler';
app.use(errorHandler);

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
  });

export default app;
