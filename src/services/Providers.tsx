'use client'

import React, { useEffect, useState } from 'react';
import { LayoutProvider } from '@/layout/context/layoutcontext';
import { MockProvider } from '@/mockProvider';
import { UserProvider } from '@auth0/nextjs-auth0/client';
import { setAuthToken } from './AuthToken';

interface ProvidersProps {
  children: React.ReactNode;
  accessToken?: string;
};

export default function Providers({ children, accessToken }: ProvidersProps) {
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    if (accessToken) setAuthToken(accessToken).then(() => setInitialized(true))
  }, [accessToken]);

  return (
    <UserProvider>
      <LayoutProvider>
        {/* <MockProvider> */}
            {initialized ? children : <>Initializing...</>}
        {/* </MockProvider> */}
      </LayoutProvider>
    </UserProvider>
  );
};
