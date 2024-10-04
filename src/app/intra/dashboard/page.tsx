'use client';

import React from 'react';
import { useUser } from '@auth0/nextjs-auth0/client';


const Dashboard = () => {

  const { user } = useUser();

  return (<div className="flex flex-column">
      <h3>DASHBOARD</h3>
      <br></br>
      <div>{JSON.stringify(user)}</div>
      <br></br>
      <a href="/api/auth/logout">Logout</a>
    </div>);
};

export default Dashboard;
