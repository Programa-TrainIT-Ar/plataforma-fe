'use client'

import { useUser } from '@auth0/nextjs-auth0/client';
import Link from 'next/link';
import React from 'react';

const Dashboard = () => {
  const { user, error, isLoading } = useUser()

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;
  if (!user) return <Link href="/api/auth/login">Login</Link>;
  return (<div className="flex flex-column">
    DASHBOARD
    <div>Hello {user.nickname}</div>
    <Link href="/api/auth/logout">Logout</Link>
  </div>);
};

export default Dashboard;
