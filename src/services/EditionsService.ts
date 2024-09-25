import axios from 'axios';

// Definir la interface
export interface Edition {
    id: number;
    name: string;
    year: string;
    project: string;
}

//Pendiente reemplazar con el endpoint real
const API_URL = 'https://api.example.com/editions';

// Fetch
export const fetchEditions = async (): Promise<Edition[]> => {
    try {
        const response = await axios.get<Edition[]>(API_URL);
        return response.data;
    } catch (error) {
        console.error('Error fetching editions:', error);
        throw error;
    }
};

//Función para obtener una edición a partir de su id
export const fetchEditionById = async (id: number): Promise<Edition> => {
    try {
        const response = await axios.get<Edition>(`${API_URL}/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching edition with id ${id}:`, error);
        throw error;
    }
};
