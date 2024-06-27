import React from 'react';
import ParticipantsTable from './ParticipantsTable';
import ParticipantsService from '@/services/ParticipantService';
import Cell from '@/types/cell';

export async function getParticipants() {
    return ParticipantsService.getParticipants();
}



const Participants = async () => {
    const participants = await getParticipants();
   return (<>
        <h3>Participantes</h3>
        <ParticipantsTable participants={participants} />
    </>);
};

export default Participants;
