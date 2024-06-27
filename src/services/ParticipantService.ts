import Participant from '@/types/participant';

const ParticipantsService = {
    getParticipants: async () => {
        const res = await fetch('https://api.example.com/participantes');
        const response = await res.json();
        return response as Participant[];
    }
};

export default ParticipantsService;
