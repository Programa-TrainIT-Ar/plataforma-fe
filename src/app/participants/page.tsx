import React from 'react'
import ParticipantsTable, { Participant, Cell } from './ParticipantsTable';

export async function getParticipants() {
    try {
        const res = await fetch('https://api.example.com/partis');
        console.log('res en get', res)
        if (!res.ok) {
            throw new Error('Failed to fetch data');
        }
        const response = await res.json()
        console.log('response.json en', response)
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

    console.log('cells get', cells)
    console.log('participants get', participants)

    return (
        <div className="grid">
            <h3>Participants</h3>
            <ParticipantsTable participants={participants} cells={cells} />
        </div>
    )
};

export default Participants;
