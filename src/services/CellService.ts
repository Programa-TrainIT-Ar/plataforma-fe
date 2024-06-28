import Cell from "@/types/cell";

const CellService = {
    getCells: async () => {
        const res = await fetch('https://api.example.com/cell');
        if (!res.ok) {
            throw new Error('Failed to fetch data cells');
        }
        const response = await res.json();
        return response as Cell[];
    }
};

export default CellService;
