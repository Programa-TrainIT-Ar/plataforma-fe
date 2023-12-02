import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';

export const ThemeConfig = () => {
    const theme = useSelector((state: RootState) => state.colorTheme.theme);
    console.log(theme);

    return (
        <head>
            <link id="theme-css" href={`/themes/${theme}/theme.css`} rel="stylesheet"></link>
        </head>
    );
};
