// src/routes/authRoutes.ts

import { Router } from 'express';
import { login, register } from '../controllers/authController';
import { verifyToken } from '../middlewares/authMiddleware';

const router = Router();

// Ruta pública para inicio de sesión
router.post('/login', login);

// Ruta protegida para registro de nuevos usuarios (solo administradores)
router.post('/register', register);

export default router;
