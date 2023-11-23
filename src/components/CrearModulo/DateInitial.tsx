
import React, { useState } from "react";
import { Calendar } from 'primereact/calendar';

export default function DateInitial() {
    const [date, setDate] = useState(null);

    return (
        <div className="">
            <Calendar value={date} onChange={(e) => setDate(e.value)} showIcon />
        </div>
    )
}
        