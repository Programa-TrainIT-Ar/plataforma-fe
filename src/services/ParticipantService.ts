import Participant from '@/types/participant';

const ParticipantsService = {
    getParticipants: async () => {
        const res = await fetch('https://api.example.com/partis');
        if (!res.ok) {
            throw new Error('Failed to fetch data participants');
        }
        const response = await res.json();
        return response as Participant[];
    }
};

export default ParticipantsService;
