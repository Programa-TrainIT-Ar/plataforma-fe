import { InputSwitch } from 'primereact/inputswitch';
import { useState } from 'react';
import { useAppDispatch } from '../../redux/hooks/hooks';
import { LocalStorageCellName, LenguageAvailable } from '../../../public/locales/interface/DictionaryLenguage';
import { setLenguage } from '../../redux/features/lenguageSlice';

export default function ChangeLenguageSwitch() {
    const [switchs, setSwitchs] = useState(initState());
    const dispatch = useAppDispatch();

    const handleChangeLenguage = () => {
        if (switchs) {
            dispatch(setLenguage(LenguageAvailable.es));
            localStorage.setItem(LocalStorageCellName.lenguage, LenguageAvailable.es);
            return setSwitchs(!switchs);
        }
        dispatch(setLenguage(LenguageAvailable.en));
        localStorage.setItem(LocalStorageCellName.lenguage, LenguageAvailable.en);
        setSwitchs(!switchs);
    };

    return (
        <div>
            <InputSwitch checked={switchs} onChange={handleChangeLenguage} />
        </div>
    );
}
//todo utilities
const initState = () => {
    //! this is to stay the position switch after of reload page
    return localStorage.getItem(LocalStorageCellName.lenguage) === LenguageAvailable.en;
};
