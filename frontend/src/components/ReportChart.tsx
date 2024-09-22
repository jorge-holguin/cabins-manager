// src/components/ReportChart.tsx
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

interface ReportChartProps {
  data: any[];
}

const ReportChart: React.FC<ReportChartProps> = ({ data }) => {
  return (
    <LineChart width={800} height={400} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="date" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="totalIncome" stroke="#8884d8" />
    </LineChart>
  );
};

export default ReportChart;
