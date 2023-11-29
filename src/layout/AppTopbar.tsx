/* eslint-disable @next/next/no-img-element */
import { useDispatch, useSelector } from 'react-redux';
import { setTheme } from '../redux/reducer';
import { RootState } from '../redux/store';
import Link from 'next/link';
import { classNames } from 'primereact/utils';
import React, { forwardRef, useContext, useImperativeHandle, useRef } from 'react';
import { AppTopBarRef } from '../types/types';
import { LayoutContext } from './context/layoutcontext';

const AppTopbar = forwardRef<AppTopBarRef>((props, ref) => {
    const { layoutConfig, layoutState, onMenuToggle, showProfileSidebar } = useContext(LayoutContext);
    const menuButtonRef = useRef(null);
    const topbarMenuRef = useRef(null);
    const topbarMenuButtonRef = useRef(null);
    const dispatch = useDispatch();
    const theme = useSelector((state: RootState) => state.colorTheme.theme);
    const newTheme = theme === 'light' ? 'dark' : 'light'; 
    useImperativeHandle(ref, () => ({
        menuButton: menuButtonRef.current,
        topbarMenu: topbarMenuRef.current,
        topbarMenuButton: topbarMenuButtonRef.current
    }));

    return (
        <div className="layout-topbar flex justify-content-between">
            <Link href="/" className="layout-topbar-logo">
                <img src={`/layout/images/Logo_trainit_color.png`}  alt="logo" />
            </Link>
            <button ref={menuButtonRef} type="button" className="p-link layout-menu-button layout-topbar-button" onClick={onMenuToggle}>
                <i className="pi pi-bars m-1" />
            </button>

            <button ref={topbarMenuButtonRef} type="button" className="p-link layout-topbar-menu-button layout-topbar-button" onClick={showProfileSidebar}>
                <i className="pi pi-ellipsis-v" />
            </button>
            {/* <button className='flex justify-content-evenly border-round-3xl' type='submit' onClick={() => dispatch(setTheme(newTheme))}>
            <i className="pi pi-moon m-1"/>
            <i className="pi pi-sun" />
            </button> */}
        </div>
    );
});

AppTopbar.displayName = 'AppTopBar';

export default AppTopbar;
