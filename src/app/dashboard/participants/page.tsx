import React from 'react';
import ParticipantsTable from './ParticipantsTable';
import ParticipantsService from '@/services/ParticipantService';

const Participants = async () => {
  const participants = await ParticipantsService.getParticipants();

  return (
    <>
      <h3>Participantes</h3>
      <ParticipantsTable participants={participants} />
    </>
  );
};

export default Participants;
