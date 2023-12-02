'use client'; //! there is a way to use redux toolkit from server component but later i see that.
import React, { useState } from 'react';
import { useAppSelector, useAppDispatch } from '../../../redux/hooks/hooks';
import { decrement, increment } from '../../../redux/features/exampleSlice';
import ChangeThemeSwitch from '../../../components/ChangeThemeSwitch/ChangeThemeSwitch';
import { setLenguage } from '../../../redux/features/lenguageSlice';
import { LenguageAvailable } from '../../../../public/locales/interface/DictionaryLenguage';
import ChangeLenguageSwitch from '../../../components/ChangeLenguageSwitch/ChangeLenguageSwitch';

const fastStyle = { fontSize: '30px', width: '100vw', display: 'flex', justifyContent: 'center', alignItems: 'center' };

//! the global state change make a  re render component
export default function ExaplmeRedux() {
    const [] = useState();
    const stateSelected = useAppSelector((state) => state.reducerExample.counter); //!Select a part of global state
    const lengSelected = useAppSelector((state) => state.reducerLenguage); //!Select a part of global state

    const dispatch = useAppDispatch();

    return (
        <div style={fastStyle}>
            <p>
                {lengSelected.dictionary.Counter}: {stateSelected}
            </p>
            <button onClick={() => dispatch(increment())}>aumentar</button>
            <button onClick={() => dispatch(decrement())}>decrementar</button>
            <button onClick={() => dispatch(setLenguage(LenguageAvailable.es))}>cambiar lenguage es</button>
            <button onClick={() => dispatch(setLenguage(LenguageAvailable.en))}>cambiar lenguage en</button>
            <ChangeLenguageSwitch />
            <ChangeThemeSwitch />
        </div>
    );
}
