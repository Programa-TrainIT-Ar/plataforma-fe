'use client';

import React, { Suspense, use } from 'react';
import { Fieldset } from 'primereact/fieldset';
import Participant from '@/types/participant';
import Cell from '@/types/cell';

// import { getCells } from './page';

const Potato: React.FC<any> = ({ promise, cell }) => {
    const cells = use<Cell[] | undefined>(getCells());
    const cellParticipant = cells?.find((c) => (c.name === cell));

    return (<Fieldset toggleable legend={cell} collapsed>
        <ul className="list-none p-0">
            <li><b>Module: </b>{cellParticipant?.module}</li>
            <li><b>Project: </b>{cellParticipant?.project}</li>
            <li><b>Edition: </b>{cellParticipant?.edition}</li>
        </ul>
    </Fieldset>);
};

export function getCells() {
    return fetch(`https://api.example.com/cell`).then((response) => response.json());
}

const CellsModal: React.FC<{ participant: Participant, cells?: Cell[] }> = ({ participant }) => {

    return <Suspense fallback={'Loading...'}>
        <div className="flex flex-column gap-4">

            {participant?.cells?.map((cell, index) => {
                return <Potato key={index}  cell={cell} />;
            })}
        </div>
    </Suspense>;
};

export default CellsModal;
