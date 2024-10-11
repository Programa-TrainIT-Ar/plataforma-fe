import React from "react";

const AddModule: React.FC = () => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // código para agregar módulo nuevo
    };
    
    return (
        <div>
            <h2>Añadir Módulo</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Nombre del Módulo:
                    <input type="text" required />
                </label>
                <button type="submit">Guardar</button>
            </form>
        </div>
    );
};

export default AddModule;