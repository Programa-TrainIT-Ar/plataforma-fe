import { AppLayoutProps } from '@/types/layout';
import { redirect } from 'next/navigation';
import { getAccessToken } from '@auth0/nextjs-auth0';
import Providers from '@/services/Providers';
import Layout from '@/layout/layout';

export default async function AppLayout({ children }: AppLayoutProps) {
  // const token = await getAccessToken().catch(redirect('/login'))
  // const accessToken = token?.accessToken
  // console.log('token en layout dashboard', accessToken)

  // return (
  //   <html lang="en" suppressHydrationWarning>
  //     <head>
  //       <link id="theme-css" href={`/themes/bootstrap4-dark-purple/theme.css`} rel="stylesheet"></link>
  //     </head>
  //     <body>
  //         {/* <Providers accessToken={token?.accessToken}> */}
  //           {children}
  //         {/* </Providers> */}
  //     </body>
  //   </html>
  // );

  try {
    const token = await getAccessToken();
    console.log('token en layout dashboard', token);
    return (
      <html lang="en" suppressHydrationWarning>
        <head>
          <link id="theme-css" href={`/themes/bootstrap4-dark-purple/theme.css`} rel="stylesheet"></link>
        </head>
        <body>
          <Providers accessToken={token?.accessToken}>
            <Layout>{children}</Layout>
          </Providers>
        </body>
      </html>
    );
  } catch (error) {
    console.error(error);
    redirect('/login');
  };
};
