import { Metadata } from "next";
import { PrimeReactProvider } from "primereact/api";
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import '../styles/layout/layout.scss';
import '../styles/demo/Demos.scss';

export const metadata: Metadata = {
  title: 'Plataforma',
  description: '',
  robots: { index: false, follow: false },
  openGraph: {
    type: 'website', title: 'TrainIt', url: '', description: '', images: [''], ttl: 604800
  },
  icons: {
    icon: '/favicon.ico'
  }
};
interface RootLayoutProps {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link id="theme-css" href={`/themes/bootstrap4-dark-purple/theme.css`} rel="stylesheet"></link>
      </head>
      <body>
        <PrimeReactProvider>
          {children}
        </PrimeReactProvider>
      </body>
    </html>
  );
};
