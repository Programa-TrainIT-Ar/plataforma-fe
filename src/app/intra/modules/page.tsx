'use client'
import React, { useState } from 'react';
import { Accordion, AccordionTab } from 'primereact/accordion';
import { Dropdown } from 'primereact/dropdown';
import AddModule from './AddModules';


interface Modulo {
  id: string;
  name: string;
}

interface Proyecto {
  id: string;
  name: string;
}

interface Edicion {
  id: string;
  name: string;
}

const modulos: Modulo[] = [
  { id: 'a', name: 'Sistemas', },
  { id: 'b', name: 'Marketing', },
  { id: 'c', name: 'Educación' },
];

const proyectos: Proyecto[] = [
  { id: "a", name: "Plataforma Trainit" },
  { id: "b", name: "MKR1" },
  { id: "c", name: "Challenge Trainit" },
]

const ediciones: Edicion[] = [
  { id: "a", name: "2022" },
  { id: "b", name: "2023" },
  { id: "c", name: "2024" },
]


const Modules: React.FC = () => {
  //Estado para mostrar addModule
  const [showAddModule, setShowAddModule] = useState<boolean>(false);
  
  //Hacer visible addModule
  const handleAddModuleClick = () => {
    setShowAddModule(!showAddModule);
  };

  return (
    <div className="modulos-container">
      <div className='grid'>
        <div className='col'>
          <h3>Módulos</h3>
        </div>
        <div className='col-fixed'>
          <button className='btn-color' onClick={handleAddModuleClick}>
            {showAddModule ? '-' : '+'}
          </button>
        </div>
      </div>
      {showAddModule && <AddModule/>}

      <div className="grid">
        <div className="col-6">
          <label><strong>Módulo</strong></label>
          <br />
          <Dropdown optionLabel="name" placeholder="Seleccionar módulo" className="w-full md:w-14rem" />
        </div>
        <div className="col-6">
          <label><strong>Proyecto</strong></label>
          <br />
          <Dropdown optionLabel="name" placeholder="Seleccionar proyecto" className="w-full md:w-14rem" />
        </div>
        <div className="col-6">
          <label><strong>Edición</strong></label>
          <br />
          <Dropdown optionLabel="name" placeholder="Seleccionar edición" className="w-full md:w-14rem" />
        </div>
        <div className="col-6">
          <label><strong>Célula</strong></label>
          <br />
          <Dropdown optionLabel="name" placeholder="Seleccionar célula" className="w-full md:w-14rem" />
        </div>
      </div>

      <Accordion multiple>
        {modulos.map(modulo => (
          <AccordionTab className='accordion-modulo' key={modulo.id} header={modulo.name}>
            <p className="m-0">+ Nuevo proyecto</p>
            {proyectos.map(proyecto => (
              <Accordion multiple key={proyecto.id}>
                <AccordionTab className='accordion-modulo' key={proyecto.id} header={proyecto.name}>
                  {ediciones.map(edicion => (
                    <p className="m-0" key={edicion.id}>- {edicion.name}</p>
                  ))}
                </AccordionTab>
              </Accordion>
            ))}
          </AccordionTab>
        ))}
      </Accordion>
    </div>
  );
};

export default Modules;