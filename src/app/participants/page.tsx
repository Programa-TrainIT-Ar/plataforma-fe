
import ParticipantsTable, { Participant, Cell } from './ParticipantsTable';

export async function getParticipants() {

    try {
        const res = await fetch(`https://api.example.com/participants`);
        if (!res.ok) {
            throw new Error('Failed to fetch data');
        }
        const response = await res.json()
        return response as Participant[];
    } catch (error) {
        console.error('error', error)
    }
}

export async function getCells() {

    try {
        const res = await fetch(`https://api.example.com/cells`);
        if (!res.ok) {
            throw new Error('Failed to fetch data');
        }
        const response = await res.json()
        return response as Cell[];
    } catch (error) {
        console.error('error', error)
    }
}

const Participants = async () => {
    const participants = await getParticipants();
    const cells = await getCells();

    console.log('cells get', cells)
    console.log('participants get', participants)

    return (
        <div className="grid">
            <h3>Participants</h3>
            {/* <ParticipantsTable participants={participants} cells={cells} /> */}
        </div>
    )
};

export default Participants;
