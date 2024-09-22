import { Router } from 'express';
import { verifyToken, isAdmin } from '../middlewares/authMiddleware';
import {
  getAllPartners,
  createPartner,
  updatePartner,
  deletePartner,
} from '../controllers/partnerController';

const router = Router();

router.use(verifyToken);
router.use(isAdmin);

router.get('/', getAllPartners);
router.post('/', createPartner);
router.put('/:id', updatePartner);
router.delete('/:id', deletePartner);

export default router;
