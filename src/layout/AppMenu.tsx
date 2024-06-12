/* eslint-disable @next/next/no-img-element */
import React from 'react';
import AppMenuitem from './AppMenuitem';
import { MenuProvider } from './context/menucontext';
import { AppMenuItem } from '@/types';

  
  const AppMenu = ({setShowModules}: {setShowModules: (show: boolean) => void}) => {
    
    //simulando mostrar modulos solo cuando se clickea esa seccion, usando setShowModules
    const model: AppMenuItem[] = [{
        label: 'Inicio', items: [{ label: 'Dashboard', icon: 'pi pi-fw pi-th-large', to: '/', command:()=>setShowModules(false) },
        { label: 'Modulos', icon: 'pi pi-fw pi-sitemap', to: '/', command:()=>setShowModules(true)},
        { label: 'Estudiar', icon: 'pi pi-fw pi-chart-line', to: '/', command:()=>setShowModules(false) },
        { label: 'Perfil', icon: 'pi pi-fw pi-user', to: '/', command:()=>setShowModules(false) },
        { label: 'Configuracion', icon: 'pi pi-fw pi-wrench', to: '/', command:()=>setShowModules(false) },
        { label: 'Notificaciones', icon: 'pi pi-fw pi-inbox', to: '/', command:()=>setShowModules(false) },
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
