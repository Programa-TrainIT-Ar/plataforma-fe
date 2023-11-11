'use client';
import { Provider } from 'react-redux';
import { store } from './store';
interface P {
    children: React.ReactNode;
}

export default function ProviderRedux({ children }: P) {
    return <Provider store={store}>{children}</Provider>;
}
