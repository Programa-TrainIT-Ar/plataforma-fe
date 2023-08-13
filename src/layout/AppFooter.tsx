/* eslint-disable @next/next/no-img-element */

import React, { useContext } from 'react';
import { LayoutContext } from './context/layoutcontext';

const AppFooter = () => {
    return (
        <div className="layout-footer">
            <span className="font-medium ml-2">Appbitos by TrainIT</span>
        </div>
    );
};

export default AppFooter;
