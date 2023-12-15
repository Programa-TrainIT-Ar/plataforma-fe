import { InputSwitch } from 'primereact/inputswitch';
import { useState } from 'react';
import { useAppDispatch } from '../../redux/hooks/hooks';
import { setTheme } from '../../redux/features/themeSlice';
import { AvailableThemes, CellNameLS } from '../themeConfig/utils/enums/enumThemes';

export default function ChangeThemeSwitch() {
    const [switchs, setSwitchs] = useState(initState());
    const dispatch = useAppDispatch();

    const handleChangeTheme = () => {
        if (switchs) {
            dispatch(setTheme(AvailableThemes.light));
            localStorage.setItem(CellNameLS.theme, AvailableThemes.light);
            return setSwitchs(!switchs);
        }
        dispatch(setTheme(AvailableThemes.dark));
        localStorage.setItem(CellNameLS.theme, AvailableThemes.dark);
        setSwitchs(!switchs);
    };

    return (
        <div>
            <InputSwitch checked={switchs} onChange={handleChangeTheme} />
        </div>
    );
}
//todo utilities
const initState = () => {
    //! this is to stay the position switch after of reload page
    return localStorage.getItem(CellNameLS.theme) === AvailableThemes.dark;
};
