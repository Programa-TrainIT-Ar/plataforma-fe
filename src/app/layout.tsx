'use client';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import '../styles/layout/layout.scss';
import '../styles/demo/Demos.scss';
import { PrimeReactProvider } from 'primereact/api';
import { LayoutProvider } from '@/layout/context/layoutcontext';
import { MockProvider } from '@/mockProvider';
import { UserProvider } from '@auth0/nextjs-auth0/client';

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (<html lang="en" suppressHydrationWarning>
    <head>
      <link id="theme-css" href={`/themes/bootstrap4-dark-purple/theme.css`} rel="stylesheet"></link>
    </head>
    <body>
      <PrimeReactProvider>
        <UserProvider>
          <LayoutProvider>
            <MockProvider>
              {children}
            </MockProvider>
          </LayoutProvider>
        </UserProvider>
      </PrimeReactProvider>
    </body>
  </html>);
}
