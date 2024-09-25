import { useState } from 'react';

const EditionsForm = () => {
    const [edition, setEdition] = useState('');
    const [name, setName] = useState('');
    const [project, setProject] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Pendiente la implementación de la lógica de envío de datos
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Edition:
                <input type="text" value={edition} onChange={(e) => setEdition(e.target.value)} />
            </label>
            <br />
            <label>
                Name:
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </label>
            <br />
            <label>
                Project:
                <input type="text" value={project} onChange={(e) => setProject(e.target.value)} />
            </label>
            <br />
            <button type="submit">Submit</button>
        </form>
    );
};

export default EditionsForm;
