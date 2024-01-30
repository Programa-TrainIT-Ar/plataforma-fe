/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React, { forwardRef, useContext, useImperativeHandle, useRef } from 'react';
import { AppTopBarRef } from '../types/types';
import { LayoutContext } from './context/layoutcontext';

const AppTopbar = forwardRef<AppTopBarRef>((props, ref) => {
    const { layoutConfig, layoutState, onMenuToggle, showProfileSidebar } = useContext(LayoutContext);
    const menuButtonRef = useRef(null);
    const topbarMenuRef = useRef(null);
    const topbarMenuButtonRef = useRef(null);
    useImperativeHandle(ref, () => ({
        menuButton: menuButtonRef.current,
        topbarMenu: topbarMenuRef.current,
        topbarMenuButton: topbarMenuButtonRef.current
    }));

    return (
        <div className="layout-topbar flex justify-content-between">
            <Link href="/" className="layout-topbar-logo">
                <img src={`/layout/images/Logo_trainit_color.png`} alt="logo" />
            </Link>
            <button ref={menuButtonRef} type="button" className="p-link layout-menu-button layout-topbar-button" onClick={onMenuToggle}>
                <i className="pi pi-bars m-1" />
            </button>

            <button ref={topbarMenuButtonRef} type="button" className="p-link layout-topbar-menu-button layout-topbar-button" onClick={showProfileSidebar}>
                <i className="pi pi-ellipsis-v" />
            </button>
        </div>
    );
});

AppTopbar.displayName = 'AppTopBar';

export default AppTopbar;
