import Layout from '../../layout/layout';
import { AppLayoutProps } from '@/types/layout';

export default function AppLayout({ children }: AppLayoutProps) {
    return <Layout>{children}</Layout>;
}
