
import ParticipantsTable from './ParticipantsTable';

async function getParticipantes() {

    try {
        const res = await fetch(`https://api.example.com/participantes`);
        if (!res.ok) {
            throw new Error('Failed to fetch data');
        }
        const response = await res.json()
        return response as any;
    } catch (error) {
        console.error('error', error)
    }
}

const Participantes = async () => {
    const participants = await getParticipantes();

    return (
        <div className="grid">
            <h3>Participantes</h3>
            <ParticipantsTable participants={participants} />
        </div>
    )
};

export default Participantes;
