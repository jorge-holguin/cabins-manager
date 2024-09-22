// src/pages/Reports.tsx
import React, { useEffect, useState } from 'react';
import { getIncomeReport } from '../services/reportService';
import ReportChart from '../components/ReportChart';
import { useAuth } from '../hooks/useAuth';
import { Typography } from '@mui/material';

const Reports: React.FC = () => {
  const { user } = useAuth();
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    if (user?.role !== 'admin') {
      return;
    }
    fetchReport();
  }, [user]);

  const fetchReport = async () => {
    try {
      const reportData = await getIncomeReport({});
      setData(reportData);
    } catch (error) {
      console.error('Error fetching report:', error);
    }
  };

  if (user?.role !== 'admin') {
    return <Typography variant="h6">Acceso denegado</Typography>;
  }

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Reportes Financieros
      </Typography>
      <ReportChart data={data} />
    </div>
  );
};

export default Reports;
