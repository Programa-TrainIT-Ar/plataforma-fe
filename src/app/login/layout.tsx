'use client'

import React from 'react';
import { AppLayoutProps } from '@/types/layout';
import AppFooter from '@/layout/AppFooter';

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <React.Fragment>
      <div className="layout-wrapper">
        <div className="layout-main-container">
          <div className="layout-main flex flex-column">
            {children}
          </div>
          <AppFooter />
        </div>
        <div className="layout-mask"></div>
      </div>
    </React.Fragment>
  )
}