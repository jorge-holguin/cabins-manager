// src/components/CabinCard.tsx
import React from 'react';
import { Cabin } from '../types/types';
import { Card, CardContent, Typography, Button } from '@mui/material';
import { Play, StopCircle } from 'lucide-react';

interface CabinCardProps {
  cabin: Cabin;
  onStart: () => void;
  onStop: () => void;
}

const CabinCard: React.FC<CabinCardProps> = ({ cabin, onStart, onStop }) => {
  return (
    <Card className="mb-4">
      <CardContent>
        <Typography variant="h5">{cabin.name}</Typography>
        <Typography color="textSecondary">Estado: {cabin.status}</Typography>
        <Typography color="textSecondary">Tarifa: {cabin.rate}</Typography>
        <div className="mt-4">
          {cabin.status !== 'in_use' ? (
            <Button
              variant="contained"
              color="primary"
              startIcon={<Play />}
              onClick={onStart}
              className="mr-2"
            >
              Iniciar
            </Button>
          ) : (
            <Button
              variant="contained"
              color="secondary"
              startIcon={<StopCircle />}
              onClick={onStop}
            >
              Detener
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default CabinCard;
