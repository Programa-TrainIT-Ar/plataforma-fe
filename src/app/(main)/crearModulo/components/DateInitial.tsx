import React, { useState } from 'react';
import { Calendar } from 'primereact/calendar';
//!esto tenemos que hacerlo general <<< sacar de aqui, el calendario se puede usar en otras features
export default function DateInitial() {
    const [date, setDate] = useState(null);

    return (
        <div className="w-full flex flex-column justify-content-center align-content-center">
            <label>Fecha de Inicio</label>
            <Calendar value={date} onChange={(e) => setDate(e.value)} showIcon />
        </div>
    );
}
