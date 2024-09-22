import { Router } from 'express';
import { verifyToken, isAdmin } from '../middlewares/authMiddleware';
import {
  getAllCabins,
  getCabinById,
  createCabin,
  updateCabin,
  deleteCabin,
} from '../controllers/cabinController';

const router = Router();

router.use(verifyToken);

router.get('/', getAllCabins);
router.get('/:id', getCabinById);
router.post('/', isAdmin, createCabin);
router.put('/:id', isAdmin, updateCabin);
router.delete('/:id', isAdmin, deleteCabin);

export default router;
