// src/pages/Cabins.tsx
import React, { useEffect, useState } from 'react';
import { Cabin } from '../types/types';
import { getCabins } from '../services/cabinService';
import CabinCard from '../components/CabinCard';
import { startUsage, endUsage } from '../services/usageRecordService';
import { Typography } from '@mui/material';

const Cabins: React.FC = () => {
  const [cabins, setCabins] = useState<Cabin[]>([]);
  const [activeUsageRecords, setActiveUsageRecords] = useState<{ [key: number]: number }>({}); // Maneja registros activos

  useEffect(() => {
    fetchCabins();
  }, []);

  const fetchCabins = async () => {
    try {
      const data = await getCabins();
      setCabins(data);
    } catch (error) {
      console.error('Error fetching cabins:', error);
    }
  };

  const handleStart = async (cabinId: number) => {
    try {
      const usageRecord = await startUsage(cabinId); // Aquí obtienes el registro de uso con su ID
      setActiveUsageRecords((prev) => ({
        ...prev,
        [cabinId]: usageRecord.id, // Guarda el ID del registro de uso activo
      }));
      fetchCabins(); // Actualiza las cabinas
    } catch (error) {
      console.error('Error starting usage:', error);
    }
  };

  const handleStop = async (cabinId: number) => {
    const usageRecordId = activeUsageRecords[cabinId]; // Busca el registro de uso activo de la cabina
    if (!usageRecordId) {
      console.error('No active usage record for this cabin.');
      return;
    }
    try {
      console.log('Attempting to stop usage with record ID:', usageRecordId); // Añade un log para verificar el ID
      await endUsage(usageRecordId); // Usa el ID del registro de uso para detener el uso
      fetchCabins(); // Actualiza las cabinas
    } catch (error) {
      console.error('Error ending usage:', error);
    }
  };

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Cabinas
      </Typography>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {cabins.map((cabin) => (
          <CabinCard
            key={cabin.id}
            cabin={cabin}
            onStart={() => handleStart(cabin.id)} // Inicia el uso
            onStop={() => handleStop(cabin.id)}  // Detiene el uso
          />
        ))}
      </div>
    </div>
  );
};

export default Cabins;
