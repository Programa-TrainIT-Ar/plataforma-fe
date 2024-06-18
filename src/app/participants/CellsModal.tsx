import React from 'react'
import { Cell, Participant } from './ParticipantsTable';
import { getCells } from './page';




const CellsModal: React.FC<{ participant: Participant, cells: Cell[] }> = ({ participant, cells }) => {
    // const cells = await getCells();
    console.log('participant en cellModal', participant)
    console.log('cells en cellModal', cells)

    return (
        <>
            <ul>
                {participant?.cells?.map((cell, index) => {
                    const cellParticipant = cells.find((c)=>(c.name === cell))
                    return (
                    <>
                        <li key={index}>{cell}</li>
                        <ul>
                            <li>Module: {cellParticipant?.description} </li>
                        </ul>
                    </>

                )})}
            </ul>
        </>
    )
}

export default CellsModal