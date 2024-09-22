import { Router } from 'express';
import { verifyToken } from '../middlewares/authMiddleware';
import {
  startUsage,
  endUsage,
  resumeUsage,
  getUsageRecords
} from '../controllers/usageRecordController';

const router = Router();

// Middleware para verificar el token antes de acceder a las rutas
router.use(verifyToken);

// Iniciar el uso de una cabina
router.post('/start', startUsage);

// Finalizar el uso de una cabina por su ID (Usage Record ID)
router.put('/end/:id', endUsage);

// Reanudar el uso de una cabina (limpiar el endTime y reanudar)
router.put('/resume/:id', resumeUsage);

// Obtener registros de uso, con opción de filtrar por fechas
router.get('/', getUsageRecords);

export default router;
