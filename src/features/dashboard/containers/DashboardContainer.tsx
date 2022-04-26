import { useGetHello } from '@api/hooks';
import React from 'react';

import { Dashboard } from '../components/Dashboard';

export const DashboardContainer = () => {
  const { data: dataHello } = useGetHello();

  if (!dataHello) return null;

  return <Dashboard message={dataHello} />;
};
