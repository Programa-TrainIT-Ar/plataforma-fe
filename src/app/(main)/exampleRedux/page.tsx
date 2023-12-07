'use client'; //! there is a way to use redux toolkit from server component but later i see that.
import React, { useState } from 'react';
import { useAppSelector, useAppDispatch } from '../../../redux/hooks/hooks';
import { decrement, increment } from '../../../redux/features/exampleSlice';
import { setTheme } from '../../../redux/features/themeSlice';
import { AvailableThemes } from '../../(full-content)/themeConfig/utils/enums/enumThemes';
import ChangeThemeSwitch from '../../../components/ChangeThemeSwitch/ChangeThemeSwitch';
import { InputTextarea } from 'primereact/inputtextarea';

const fastStyle = { fontSize: '30px', width: '100vw', display: 'flex', justifyContent: 'center', alignItems: 'center' };

//! the global state change make a  re render component
export default function ExaplmeRedux() {
    const [] = useState();
    const stateSelected = useAppSelector((state) => state.reducerExample.counter); //!Select a part of global state
    const dispatch = useAppDispatch();
    console.log(stateSelected);

    return (
        <div style={fastStyle}>
            <p>counter: {stateSelected}</p>
            <button onClick={() => dispatch(increment())}>aumentar</button>
            <button onClick={() => dispatch(decrement())}>decrementar</button>
            <ChangeThemeSwitch />
            <InputTextarea className=" border-round-2xl" placeholder={'placeholder'} rows={5} cols={30} />
        </div>
    );
}
