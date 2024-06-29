/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { useEventListener, useUnmountEffect } from 'primereact/hooks';
import React, { useContext, useEffect, useState, useRef } from 'react';
import { classNames } from 'primereact/utils';
import AppFooter from './AppFooter';
import AppSidebar from './AppSidebar';
import AppTopbar from './AppTopbar';
import { LayoutContext } from './context/layoutcontext';
import { AppTopbarRef, ChildContainerProps, LayoutState } from '@/types';
import { PrimeReactContext } from 'primereact/api';
import Modules from "../modules/Modules";


const Layout = ({ children }: ChildContainerProps) => {
    const { layoutConfig, layoutState, setLayoutState } = useContext(LayoutContext);
    const { setRipple } = useContext(PrimeReactContext);
    const topbarRef = useRef<AppTopbarRef>(null);
    const sidebarRef = useRef<HTMLDivElement>(null);
    const [bindMenuOutsideClickListener, unbindMenuOutsideClickListener] = useEventListener({
        type: 'click', listener: (event) => {
            const isOutsideClicked = !(sidebarRef.current?.isSameNode(event.target as Node) || sidebarRef.current?.contains(event.target as Node) || topbarRef.current?.menuButton?.isSameNode(event.target as Node) || topbarRef.current?.menuButton?.contains(event.target as Node));

            if (isOutsideClicked) {
                hideMenu();
            }
        }
    });

    const pathname = usePathname();
    const searchParams = useSearchParams();
    useEffect(() => {
        hideMenu();
        hideProfileMenu();
    }, [pathname, searchParams]);

    const [bindProfileMenuOutsideClickListener, unbindProfileMenuOutsideClickListener] = useEventListener({
        type: 'click', listener: (event) => {
            const isOutsideClicked = !(topbarRef.current?.topbarMenu?.isSameNode(event.target as Node) || topbarRef.current?.topbarMenu?.contains(event.target as Node) || topbarRef.current?.topbarmenuButton?.isSameNode(event.target as Node) || topbarRef.current?.topbarmenuButton?.contains(event.target as Node));

            if (isOutsideClicked) {
                hideProfileMenu();
            }
        }
    });

    const hideMenu = () => {
        setLayoutState((prevLayoutState: LayoutState) => ({
            ...prevLayoutState, overlayMenuActive: false, staticMenuMobileActive: false, menuHoverActive: false
        }));
        unbindMenuOutsideClickListener();
        unblockBodyScroll();
    };

    const hideProfileMenu = () => {
        setLayoutState((prevLayoutState: LayoutState) => ({
            ...prevLayoutState, profileSidebarVisible: false
        }));
        unbindProfileMenuOutsideClickListener();
    };

    const blockBodyScroll = (): void => {
        if (document.body.classList) {
            document.body.classList.add('blocked-scroll');
        } else {
            document.body.className += ' blocked-scroll';
        }
    };

    const unblockBodyScroll = (): void => {
        if (document.body.classList) {
            document.body.classList.remove('blocked-scroll');
        } else {
            document.body.className = document.body.className.replace(new RegExp('(^|\\b)' + 'blocked-scroll'.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
        }
    };

    useEffect(() => {
        if (layoutState.overlayMenuActive || layoutState.staticMenuMobileActive) {
            bindMenuOutsideClickListener();
        }

        layoutState.staticMenuMobileActive && blockBodyScroll();
    }, [layoutState.overlayMenuActive, layoutState.staticMenuMobileActive]);

    useEffect(() => {
        if (layoutState.profileSidebarVisible) {
            bindProfileMenuOutsideClickListener();
        }
    }, [layoutState.profileSidebarVisible]);

    useUnmountEffect(() => {
        unbindMenuOutsideClickListener();
        unbindProfileMenuOutsideClickListener();
    });

    const containerClass = classNames('layout-wrapper', {
        'layout-overlay': layoutConfig.menuMode === 'overlay',
        'layout-static': layoutConfig.menuMode === 'static',
        'layout-static-inactive': layoutState.staticMenuDesktopInactive && layoutConfig.menuMode === 'static',
        'layout-overlay-active': layoutState.overlayMenuActive,
        'layout-mobile-active': layoutState.staticMenuMobileActive,
        'p-input-filled': layoutConfig.inputStyle === 'filled',
        'p-ripple-disabled': !layoutConfig.ripple
    });


 // Estado para mostrar los módulos
 const [showModules, setShowModules] = useState(false);

 // Array de módulos hasta que este mock / api
 const modulos = [
     { id: 'a', name: 'Sistemas',},
     { id: 'b', name: 'Marketing',},
     { id: 'c', name: 'Educación'},
 ];

 const proyectos = [
    {id: "a", name: "Plataforma Trainit"},
    {id: "b", name: "MKR1"},
    {id: "c", name: "Challenge Trainit"},

]

const ediciones = [
    {id: "a", name: "2022"},
    {id: "b", name: "2023"},
    {id: "c", name: "2024"},

]



    return (
<React.Fragment>
            <div className={containerClass}>
                <AppTopbar ref={topbarRef} />
                <div ref={sidebarRef} className="layout-sidebar">
                    <AppSidebar setShowModules={setShowModules} /> {/* Pasamos el prop setShowModules */}
                </div>
                <div className="layout-main-container">
                    <div className="layout-main">
                        {showModules ? <Modules modulos={modulos} proyectos={proyectos} ediciones={ediciones} /> : children}
                    </div>
                    <AppFooter />
                </div>
                <div className="layout-mask"></div>
            </div>
        </React.Fragment>
        );
};

export default Layout;
