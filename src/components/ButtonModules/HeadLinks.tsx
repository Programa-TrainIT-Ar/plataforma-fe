import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
export const HeadLinks = () => {
    const theme = useSelector((state: RootState) => state.colorTheme.theme);
    return (
        <head>
            <link id="theme-css" href={`/themes/lara-dark-indigo/theme.css`} rel="stylesheet"></link>
        </head>
    );
};
