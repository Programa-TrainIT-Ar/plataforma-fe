/* eslint-disable @next/next/no-img-element */

import Link from 'next/link';
import React, { forwardRef, useContext, useImperativeHandle, useRef } from 'react';
import { AppTopbarRef } from '@/types';
import { LayoutContext } from './context/layoutcontext';
import { Button } from 'primereact/button';

const AppTopbar = forwardRef<AppTopbarRef>((props, ref) => {
    const { layoutConfig, layoutState, onMenuToggle, showProfileSidebar } = useContext(LayoutContext);
    const menuButtonRef = useRef(null);
    const topbarMenuRef = useRef(null);
    const topbarmenuButtonRef = useRef(null);

    useImperativeHandle(ref, () => ({
        menuButton: menuButtonRef.current,
        topbarMenu: topbarMenuRef.current,
        topbarmenuButton: topbarmenuButtonRef.current
    }));

    return (<div className="layout-topbar">
            <Link href="/" className="layout-topbar-logo">
                <img src={`/layout/images/logo-${layoutConfig.colorScheme !== 'light' ? 'white' : 'dark'}.svg`}
                     width="47.22px" height={'35px'} alt="logo" />
                <span>TrainIt</span>
            </Link>

            <Button link ref={topbarMenuRef} type="button" className="p-link layout-menu-button layout-topbar-button" onClick={onMenuToggle}>
                <i className="pi pi-bars" />
            </Button>

            <button ref={topbarmenuButtonRef} type="button"
                    className="p-link layout-topbar-menu-button layout-topbar-button" onClick={showProfileSidebar}>
                <i className="pi pi-ellipsis-v" />
            </button>

        </div>);
});

AppTopbar.displayName = 'AppTopbar';

export default AppTopbar;
