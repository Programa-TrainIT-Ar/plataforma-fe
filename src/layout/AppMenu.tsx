/* eslint-disable @next/next/no-img-element */

import React, { useContext } from 'react';
import AppMenuitem from './AppMenuitem';
import { LayoutContext } from './context/layoutcontext';
import { MenuProvider } from './context/menucontext';
import { AppMenuItem } from '../types/types';

const AppMenu = () => {
    const { layoutConfig } = useContext(LayoutContext);

    const model: AppMenuItem[] = [
        {
            label: '',
            items: [
                { label: 'Dashboard', icon: 'pi pi-fw pi-home', to: '/' },
                { label: 'Login', icon: 'pi pi-user', to: '/' },
                { label: 'Create Module', icon: 'pi pi-th-large', to: '/module/create' }
            ]
        }
    ];

    return (
        <div className='flex flex-column py-6 h-auto'>
            <p className='text-xl mb-3 mx-auto'>Home</p>
            <MenuProvider>
                <ul className="layout-menu">
                    {model.map((item, i) => {
                        return !item?.seperator ? <AppMenuitem item={item}  root={true} index={i} key={item.label} /> : <li className="menu-separator"></li>;
                    })}
                </ul>
            </MenuProvider>
        </div>
    );
};

export default AppMenu;
