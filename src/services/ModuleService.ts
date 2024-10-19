import Modulo from "@/types/modulo";
import { axiosInstance } from '@/services/TrainItClient'

const ModuleService = {
    getModules: async () => {
        try {
            const response = await axiosInstance.get<Modulo[]>('http://localhost:8000/api/modulo/modulos/');
            return response.data;
        } catch (error) {
            console.error("Error fetching modules", error);
            throw error;
        }
    },
    createModule: async (module: Modulo) => {
        try {
            const response = await axiosInstance.post<Modulo>('http://localhost:8000/api/modulo/modulos/', module);
            return response.data;    
        } catch (error) {
            console.error("Error creating module", error);
            throw error;
        }
    },
    deleteModule: async (id: string) => {
        try {
            const response = await axiosInstance.delete(`http://localhost:8000/api/modulo/modulos/${id}`);
            return response.data;            
        } catch (error) {
            console.error("Error deleting module", error);
            throw error;
        }
    }
};

export default ModuleService;