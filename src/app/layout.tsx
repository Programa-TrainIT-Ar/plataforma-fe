'use client';

import { LayoutProvider } from '../layout/context/layoutcontext';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import '../styles/layout/layout.scss';
import '../styles/demo/Demos.scss';
import { Provider } from 'react-redux';
import { store } from '../redux/store';
import Head from 'next/head';
import { ThemeConfig } from '../components/themeConfig/themeConfig';
interface RootLayoutProps {
    children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <Provider store={store}>
            <html lang="en" suppressHydrationWarning>
                <ThemeConfig />
                <body>
                    <LayoutProvider>{children}</LayoutProvider>
                </body>
            </html>
        </Provider>
    );
}
