import React from 'react'
import { Cell, Participant } from './ParticipantsTable';
import { Fieldset } from 'primereact/fieldset';
// import { getCells } from './page';

const CellsModal: React.FC<{ participant: Participant, cells: Cell[] }> = ({ participant, cells }) => {
    // const cells = await getCells();

    return (
        <>
            {participant?.cells?.map((cell, index) => {
                const cellParticipant = cells.find((c) => (c.name === cell))
                return (
                    <Fieldset toggleable legend={cell} key={index}>
                        <ul className='list-none p-0'>
                            <li><b>Module: </b>{cellParticipant?.module}</li>
                            <li><b>Project: </b>{cellParticipant?.project}</li>
                            <li><b>Edition: </b>{cellParticipant?.edition}</li>
                        </ul>
                    </Fieldset>
                )
            })}
        </>
    )
}

export default CellsModal