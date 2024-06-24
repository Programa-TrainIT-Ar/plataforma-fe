import React from 'react'
import ParticipantsTable, { Participant, Cell } from './ParticipantsTable';

export async function getParticipants() {
    try {
        const res = await fetch('https://api.example.com/partis');
        if (!res.ok) {
            throw new Error('Failed to fetch data');
        }
        const response = await res.json()
        return response as Participant[];
    } catch (error) {
        console.error('error', error)
    }
}

export async function getCells() {
    try {
        const res = await fetch(`https://api.example.com/cell`);
        if (!res.ok) {
            throw new Error('Failed to fetch data');
        }
        const response = await res.json()
        return response as Cell[];
    } catch (error) {
        console.error('error', error)
    }
}

const Participants = async () => {
    const participants = await getParticipants();
    const cells = await getCells();

    return (
        <>
            <h3>Participantes</h3>
            <ParticipantsTable participants={participants} cells={cells} />
        </>
    )
};

export default Participants;
