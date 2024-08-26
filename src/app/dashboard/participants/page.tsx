import React from 'react';
import ParticipantsTable from './ParticipantsTable';
import { getParticipantsAxios } from '@/services/ParticipantService';

const Participants = async () => {
  const participants = await getParticipantsAxios();

  console.log('participants', participants)

  return (
    <>
      <h3>Participantes</h3>
      <ParticipantsTable participants={participants} />
    </>
  );
};

export default Participants;
