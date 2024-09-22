// src/pages/Dashboard.tsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Cabins from './Cabins';
import Expenses from './Expenses';
import Reports from './Reports';
import NotFound from './NotFound';
import Layout from '../components/Layout';

const Dashboard: React.FC = () => {
  return (
    <Layout>
      <Routes>
        <Route path="cabins" element={<Cabins />} />
        <Route path="expenses" element={<Expenses />} />
        <Route path="reports" element={<Reports />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
};

export default Dashboard;
