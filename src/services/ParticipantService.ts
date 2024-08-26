import Participant from '@/types/participant';
import { axiosInstance } from './AuthToken';

// const getParticipants = async () => {
//   const res = await fetch('https://api.example.com/partis');
//   if (!res.ok) {
//       throw new Error('Failed to fetch data participants');
//   }
//   const response = await res.json();
//   return response as Participant[];
// };

const getParticipantsAxios = async () => {
  try {
    const response = await axiosInstance.get('/usuarios');
    if (!response) {
      throw new Error('Failed to fetch data participants');
    }
    console.log('response', response)
    return response.data as Participant[];
  } catch (error) {
    console.error(error)
  }
};

export { getParticipantsAxios };
