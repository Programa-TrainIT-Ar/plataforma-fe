'use client'

import Layout from '../../layout/layout';
import { AppLayoutProps } from '@/types/layout';
import { useUser } from '@auth0/nextjs-auth0/client';
import { Metadata } from 'next';
import { redirect } from 'next/navigation';

// export const metadata: Metadata = {
//   title: 'Plataforma',
//   description: '',
//   robots: { index: false, follow: false },
//   openGraph: {
//     type: 'website', title: 'TrainIt', url: '', description: '', images: [''], ttl: 604800
//   },
//   icons: {
//     icon: '/favicon.ico'
//   }
// };

export default function AppLayout({ children }: AppLayoutProps) {
  const { user, error, isLoading } = useUser()

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;
  if (!user) { redirect("/api/auth/login") }

  return <Layout>{children}</Layout>;
}
