import React from 'react';
import ComponenteDetalle from '../ComponenteDetalle/page';

const DetallePagina = () => {
  // Datos de ejemplo
  const descripcion = 'Armado de la pagina web del proyecto.';
  const tecnologias = ['React', 'Next.js', 'CSS'];
  const enlacesAyuda = [
    { url: 'https://ejemplo.com/ayuda1', texto: 'Ayuda 1' },
    { url: 'https://ejemplo.com/ayuda2', texto: 'Ayuda 2' },
  ];

  return (
    <div>
      <h5>Tareas realizadas:</h5>
      <ComponenteDetalle
        descripcion={descripcion}
        tecnologias={tecnologias}
        enlacesAyuda={enlacesAyuda}
      />
    </div>
  );
};

export default DetallePagina;