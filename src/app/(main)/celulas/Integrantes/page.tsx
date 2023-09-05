import React from 'react';

function Integrantes() { 
  const datos = [
    { nombre: "Josue Valenzuela", descripcion: "Líder de célula." },
    { nombre: "Gino Harold Gallardo Torres", descripcion: "Desarrollador Jr." },
    { nombre: "Leonel Torrealba", descripcion: "Desarrollador Sr. y líder de célula" },
    { nombre: "Alan Seyahian", descripcion: "Desarrollador Jr." },
  ];

  return (
    <>
      <h5>Integrantes</h5>
      <ul>
        {datos.map((item, index) => (
          <li key={index}>
            <strong>{item.nombre}:</strong> {item.descripcion}
          </li>
        ))}
      </ul>
    </>
  );
}

export default Integrantes;