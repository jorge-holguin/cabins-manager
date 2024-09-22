// src/services/reportService.ts
import api from './api';

export const getIncomeReport = async (params: any): Promise<any> => {
  const response = await api.get('/reports/income', { params });
  return response.data;
};

// Agrega funciones para getExpenseReport y getProfitReport si es necesario
