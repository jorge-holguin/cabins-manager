import { Router } from 'express';
import { verifyToken, isAdmin } from '../middlewares/authMiddleware';
import {
  getAllExpenses,
  createExpense,
  updateExpense,
  deleteExpense,
} from '../controllers/expenseController';

const router = Router();

router.use(verifyToken);

router.get('/', getAllExpenses);
router.post('/', isAdmin, createExpense);
router.put('/:id', isAdmin, updateExpense);
router.delete('/:id', isAdmin, deleteExpense);

export default router;
