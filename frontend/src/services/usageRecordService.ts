// src/services/usageRecordService.ts
import api from './api';
import { UsageRecord } from '../types/types';

// Inicia el uso de una cabina, devuelve el registro de uso
export const startUsage = async (cabinId: number): Promise<UsageRecord> => {
  const response = await api.post('/usage-records/start', { cabinId });
  return response.data; // Asegúrate de que el 'UsageRecord' que devuelve incluye el 'id'
};

// Finaliza el uso de una cabina, utilizando el 'usageRecordId'
export const endUsage = async (recordId: number): Promise<UsageRecord> => {
  const response = await api.put(`/usage-records/end/${recordId}`);
  return response.data;
};

// (Opcional) Si quieres obtener registros de uso específicos
export const getUsageRecords = async (): Promise<UsageRecord[]> => {
  const response = await api.get('/usage-records');
  return response.data;
};
