import Participant from '@/types/participant';
import { axiosInstance } from '@/services/TrainItClient';

const ParticipantsService = {
    getParticipants: async () => {
        const response = await axiosInstance.get<Participant[]>('https://api.example.com/participantes');
        return response.data ;
    },
  createParticipant: async (participant: Participant) => {
      return await axiosInstance.post<Participant>('https://api.example.com/participantes', participant);
  },
  updateParticipant: async (participant: Participant) => {
      return await axiosInstance.put<Participant>(`https://api.example.com/participantes/${participant.id}`, participant);
  }
};

export default ParticipantsService;
