// src/components/ExpenseForm.tsx
import React, { useState } from 'react';
import { Expense } from '../types/types';
import { TextField, Button, MenuItem } from '@mui/material';

interface ExpenseFormProps {
  onSubmit: (expense: Expense) => void;
  initialData?: Expense;
}

const ExpenseForm: React.FC<ExpenseFormProps> = ({ onSubmit, initialData }) => {
  const [expense, setExpense] = useState<Expense>(
    initialData || { id: 0, type: 'fixed', description: '', amount: 0, date: '' }
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setExpense({ ...expense, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(expense);
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        select
        label="Tipo"
        name="type"
        value={expense.type}
        onChange={handleChange}
        fullWidth
        margin="normal"
      >
        <MenuItem value="fixed">Fijo</MenuItem>
        <MenuItem value="variable">Variable</MenuItem>
      </TextField>
      <TextField
        label="Descripción"
        name="description"
        value={expense.description}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Monto"
        name="amount"
        type="number"
        value={expense.amount}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Fecha"
        name="date"
        type="date"
        value={expense.date}
        onChange={handleChange}
        fullWidth
        margin="normal"
        InputLabelProps={{ shrink: true }}
      />
      <Button type="submit" variant="contained" color="primary">
        Guardar
      </Button>
    </form>
  );
};

export default ExpenseForm;
