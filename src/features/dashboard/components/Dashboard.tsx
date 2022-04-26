import React, { FC } from 'react';

interface DashboardProps {
  message: string;
}

export const Dashboard: FC<DashboardProps> = ({ message }) => <div>{message}</div>;
