import { Demo } from '../../types/types';

export const ModulesService = {
    getModules() {
        return fetch('./stubs/cells-modules.json', { headers: { 'Cache-Control': 'no-cache' } })
            .then((res) => res.json())
            .then((d) => d.data as Demo.Module[]);
    },

    getCellModules() {
        return fetch('/stubs/cells-modules.json', { headers: { 'Cache-Control': 'no-cache' } })
            .then((res) => res.json())
            .then((d) => d.data as Demo.CellItem[]);
    }
};
