// src/pages/Expenses.tsx
import React, { useEffect, useState } from 'react';
import { Expense } from '../types/types';
import { getExpenses, createExpense } from '../services/expenseService';
import { Table, TableBody, TableCell, TableHead, TableRow, Button, Dialog, DialogTitle, DialogContent, Typography } from '@mui/material';
import ExpenseForm from '../components/ExpenseForm';

const Expenses: React.FC = () => {
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    fetchExpenses();
  }, []);

  const fetchExpenses = async () => {
    try {
      const data = await getExpenses();
      setExpenses(data);
    } catch (error) {
      console.error('Error fetching expenses:', error);
    }
  };

  const handleAddExpense = async (expense: Expense) => {
    try {
      await createExpense(expense);
      fetchExpenses();
      setOpen(false);
    } catch (error) {
      console.error('Error creating expense:', error);
    }
  };

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Gastos
      </Typography>
      <Button variant="contained" color="primary" onClick={() => setOpen(true)}>
        Agregar Gasto
      </Button>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Tipo</TableCell>
            <TableCell>Descripción</TableCell>
            <TableCell>Monto</TableCell>
            <TableCell>Fecha</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {expenses.map((expense) => (
            <TableRow key={expense.id}>
              <TableCell>{expense.type}</TableCell>
              <TableCell>{expense.description}</TableCell>
              <TableCell>{expense.amount}</TableCell>
              <TableCell>{expense.date}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Agregar Gasto</DialogTitle>
        <DialogContent>
          <ExpenseForm onSubmit={handleAddExpense} />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Expenses;
