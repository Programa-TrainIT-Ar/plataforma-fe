import { AppLayoutProps } from '@/types/layout';
import { redirect } from 'next/navigation';
import { getAccessToken } from '@auth0/nextjs-auth0';
import Providers from '@/utils/Providers';
import Layout from '@/layout/layout';
import { useUser } from '@auth0/nextjs-auth0/client';
import AuthGuard from '@/utils/AuthGuard';

export default async function AppLayout({ children }: AppLayoutProps) {

  try {
    const token = await getAccessToken();
    console.log('token en layout dashboard', token);

    return (
      <Providers accessToken={token?.accessToken}>\
        <AuthGuard />
        <Layout>{children}</Layout>
      </Providers>

    );
  } catch (error) {
    console.error(error);
    redirect('/login');
  }

};
