// src/services/cabinService.ts
import api from './api';
import { Cabin } from '../types/types';

export const getCabins = async (): Promise<Cabin[]> => {
  const response = await api.get('/cabins');
  return response.data;
};

export const createCabin = async (cabinData: Cabin): Promise<Cabin> => {
  const response = await api.post('/cabins', cabinData);
  return response.data;
};

export const updateCabinStatus = async (cabinId: number, status: string): Promise<void> => {
  await api.put(`/cabins/${cabinId}/status`, { status });
};
// Agrega funciones para updateCabin y deleteCabin si es necesario
