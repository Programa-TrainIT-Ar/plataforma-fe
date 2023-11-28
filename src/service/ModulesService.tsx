import { Demo } from '../types/types';



export const ModulesService = {
 

    getModules() {
        
        return fetch(`/data/modules.json`, { headers: { 'Cache-Control': 'no-cache' } })
            .then((res) => res.json())
            .then((d) => d.data as Demo.Module[]);
            
    }
};
