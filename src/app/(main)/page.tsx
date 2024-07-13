'use client'

import React from 'react';
import { useUser } from '@auth0/nextjs-auth0/client';
import { redirect } from 'next/navigation';

const Dashboard = () => {
  const { user, error, isLoading } = useUser()

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;
  if (!user) {redirect('/login')}

  return (
    <div className="flex flex-column">
      <h3>DASHBOARD</h3>
      <br></br>
      <div>{JSON.stringify(user)}</div>
      <br></br>
      <a href="/api/auth/logout">Logout</a>
    </div>
  );
};

export default Dashboard;
