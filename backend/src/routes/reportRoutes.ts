import { Router } from 'express';
import { verifyToken, isAdmin } from '../middlewares/authMiddleware';
import {
  getIncomeReport,
  getExpenseReport,
  getProfitReport,
} from '../controllers/reportController';

const router = Router();

router.use(verifyToken);
router.use(isAdmin);

router.get('/income', getIncomeReport);
router.get('/expenses', getExpenseReport);
router.get('/profits', getProfitReport);

export default router;
