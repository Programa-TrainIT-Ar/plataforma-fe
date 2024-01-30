'use client';
import { InputSwitch } from 'primereact/inputswitch';
import { useState } from 'react';
import { useAppDispatch } from '../../redux/hooks/hooks';
import { LocalStorageCellName, LanguageAvailable } from '../../../public/locales/interface/DictionaryLanguage';
import { setLanguage } from '../../redux/features/languageSlice';

export default function ChangeLanguageSwitch() {
    const [switchs, setSwitchs] = useState<boolean>(initState());
    const dispatch = useAppDispatch();

    const handleChangeLanguage = () => {
        if (typeof window !== 'undefined') {
            if (switchs) {
                dispatch(setLanguage(LanguageAvailable.es));
                localStorage.setItem(LocalStorageCellName.language, LanguageAvailable.es);
                return setSwitchs(!switchs);
            }
            dispatch(setLanguage(LanguageAvailable.en));
            localStorage.setItem(LocalStorageCellName.language, LanguageAvailable.en);
            setSwitchs(!switchs);
        }
    };

    return (
        <div>
            <InputSwitch checked={switchs} onChange={handleChangeLanguage} />
        </div>
    );
}
//todo utilities
const initState = () => {
    //! this is to stay the position switch after of reload page
    if (typeof window !== 'undefined') {
        return localStorage.getItem(LocalStorageCellName.language) === LanguageAvailable.en;
    }
    return false;
};
