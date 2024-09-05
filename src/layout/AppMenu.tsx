/* eslint-disable @next/next/no-img-element */
import React from 'react';
import AppMenuitem from './AppMenuitem';
import { MenuProvider } from './context/menucontext';
import { AppMenuItem } from '@/types';

const AppMenu = () => {
    const model: AppMenuItem[] = [{
        label: '', items: [
            { label: 'Dashboard', icon: 'pi pi-fw pi-home', to: '/' },
            { label: 'Participantes', icon: 'pi pi-fw pi-user', to: '/participants' }
        ]
    }];

    return (<MenuProvider>
        <ul className="layout-menu">
            {model.map((item, i) => {
                return !item?.seperator ? <AppMenuitem item={item} root={true} index={i} key={item.label} /> :
                    <li className="menu-separator"></li>;
            })}
        </ul>
    </MenuProvider>);
};

export default AppMenu;
