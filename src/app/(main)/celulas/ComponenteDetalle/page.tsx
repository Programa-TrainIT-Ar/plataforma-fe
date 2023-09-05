import React from 'react';

interface Props {
  descripcion: string;
  tecnologias: string[];
  enlacesAyuda: { url: string; texto: string }[];
}

const ComponenteDetalle: React.FC<Props> = ({ descripcion, tecnologias, enlacesAyuda }) => {
  return (
    <div className="detalle">
      <h5>Descripción:</h5>
      <p>{descripcion}</p>

      <h5>Tecnologías:</h5>
      <ul>
        {tecnologias.map((tecnologia, index) => (
          <li key={index}>{tecnologia}</li>
        ))}
      </ul>

      <h5>Enlaces de Ayuda:</h5>
      <ul>
        {enlacesAyuda.map((enlace, index) => (
          <li key={index}>
            <a href={enlace.url}>{enlace.texto}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ComponenteDetalle;