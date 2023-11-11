'use client'; //! there is a way to use redux toolkit from server component but later i see that.
import React from 'react';
import { useAppSelector, useAppDispatch } from '../../redux/hooks/hooks';
import { decrement, increment } from '../../redux/features/exampleSlice';
const fastStyle = { fontSize: '30px', width: '100vw', display: 'flex', justifyContent: 'center', alignItems: 'center' };

//! the global state change make a  re render component
export default function ExaplmeRedux() {
    const stateSelected = useAppSelector((state) => state.reducerExample.counter); //!Select a part of global state
    const dispatch = useAppDispatch();
    console.log(stateSelected);

    return (
        <div style={fastStyle}>
            <p>counter: {stateSelected}</p>
            <button onClick={() => dispatch(increment())}>aumentar</button>
            <button onClick={() => dispatch(decrement())}>decrementar</button>
        </div>
    );
}
