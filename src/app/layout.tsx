'use client';

import { Metadata } from 'next';
import { LayoutProvider } from '../layout/context/layoutcontext';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import '../styles/layout/layout.scss';
import '../styles/demo/Demos.scss';
import { Provider } from 'react-redux';
import { store } from '../redux/store';
import { useState } from 'react';
import { HeadLinks } from '../components/ButtonModules/HeadLinks';
interface RootLayoutProps {
    children: React.ReactNode;
}
/*export const metadata: Metadata = {
    title: "",
    description:
        "La mejor aplicacion para cultivar habitos.",
    robots: {index: false, follow: false},
    viewport: {initialScale: 1, width: "device-width"},
export const metadata: Metadata = {
    title: '',
    description: 'La mejor aplicacion para cultivar habitos.',
    robots: { index: false, follow: false },
    viewport: { initialScale: 1, width: 'device-width' },
    openGraph: {
        type: 'website',
        title: 'Appbitos',
        description: 'La mejor aplicacion para cultivar habitos',
        images: ['https://www.primefaces.org/static/social/sakai-nextjs.png'],
        ttl: 604800
    },
    icons: {
        icon: "/favicon.ico",
    },
};*/

export default function RootLayout({ children }: RootLayoutProps) {

    return (
        <Provider store={store}>
            <html lang="en" suppressHydrationWarning>
                <HeadLinks></HeadLinks>
                <body>
                    <LayoutProvider>{children}</LayoutProvider>
                </body>
            </html>
        </Provider>
    );

    }