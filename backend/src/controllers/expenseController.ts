import { Request, Response } from 'express';
import Expense from '../models/Expense';

export const getAllExpenses = async (req: Request, res: Response) => {
  try {
    const expenses = await Expense.findAll();
    res.json(expenses);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching expenses', error });
  }
};

export const createExpense = async (req: Request, res: Response) => {
  try {
    const { type, description, amount, date } = req.body;
    const newExpense = await Expense.create({ type, description, amount, date });
    res.status(201).json(newExpense);
  } catch (error) {
    res.status(500).json({ message: 'Error creating expense', error });
  }
};

export const updateExpense = async (req: Request, res: Response) => {
  try {
    const expense = await Expense.findByPk(req.params.id);
    if (expense) {
      await expense.update(req.body);
      res.json(expense);
    } else {
      res.status(404).json({ message: 'Expense not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error updating expense', error });
  }
};

export const deleteExpense = async (req: Request, res: Response) => {
  try {
    const expense = await Expense.findByPk(req.params.id);
    if (expense) {
      await expense.destroy();
      res.json({ message: 'Expense deleted' });
    } else {
      res.status(404).json({ message: 'Expense not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error deleting expense', error });
  }
};
