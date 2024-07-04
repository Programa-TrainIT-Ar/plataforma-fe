import { Metadata } from 'next';
import Layout from '../../layout/layout';
import { AppLayoutProps } from '@/types/layout';


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

export default function AppLayout({ children }: AppLayoutProps) {
    return <Layout>{children}</Layout>;
}
