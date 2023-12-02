import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import { AvailableThemes } from './enumThemes';

export const ThemeConfig = () => {
    const theme = useSelector((state: RootState) => state.colorTheme.theme);

    return (
        <head>
            <link id="theme-css" href={`/themes/${theme}/theme.css`} rel="stylesheet"></link>
        </head>
    );
};
