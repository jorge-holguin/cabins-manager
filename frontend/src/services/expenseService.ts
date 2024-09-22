// src/services/expenseService.ts
import api from './api';
import { Expense } from '../types/types';

export const getExpenses = async (): Promise<Expense[]> => {
  const response = await api.get('/expenses');
  return response.data;
};

export const createExpense = async (expenseData: Expense): Promise<Expense> => {
  const response = await api.post('/expenses', expenseData);
  return response.data;
};

// Agrega funciones para updateExpense y deleteExpense si es necesario
