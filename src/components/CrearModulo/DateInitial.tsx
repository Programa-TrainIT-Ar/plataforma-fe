
import React, { useState } from "react";
import { Calendar } from 'primereact/calendar';

export default function DateInitial() {
    const [date, setDate] = useState(null);

    return (
        <div className="flex flex-column justify-content-center align-content-center">
            <label>Fecha de Inicio</label>
            <Calendar value={date} onChange={(e) => setDate(e.value)} showIcon />
        </div>
    )
}
        