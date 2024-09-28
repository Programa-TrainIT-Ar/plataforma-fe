import React from 'react';
import { Accordion, AccordionTab } from 'primereact/accordion';
import { Dropdown } from 'primereact/dropdown';
// import styles from "@/styles/modules style/modules-styles.scss";
// import Modulo from "@/types/modulo";
// import Proyectos from "@/types/proyecto";
// import Ediciones from "@/types/ediciones";

// interface ModulosProps {
//   modulos: Modulo[];
//   proyectos: Proyectos[];
//   ediciones: Ediciones[];
// }

// Array de módulos hasta que este mock / api
const modulos = [
  { id: 'a', name: 'Sistemas', },
  { id: 'b', name: 'Marketing', },
  { id: 'c', name: 'Educación' },
];

const proyectos = [
  { id: "a", name: "Plataforma Trainit" },
  { id: "b", name: "MKR1" },
  { id: "c", name: "Challenge Trainit" },
]

const ediciones = [
  { id: "a", name: "2022" },
  { id: "b", name: "2023" },
  { id: "c", name: "2024" },
]


const Modules = () => {
  return (
    <div className="modulos-container">
      <div className='grid'>
        <div className='col'>
          <h3>Módulos</h3>
        </div>
        <div className='col-fixed'>
          <button className='btn-color'>+</button>
        </div>
      </div>
      <div className='grid'>
        <div className="col-6">
          <label><strong>Modulo</strong></label>
          <br></br>
          <Dropdown /* value={} */ optionLabel="name"
            placeholder="Seleccionar modulo" className="w-full md:w-14rem" />
        </div>
        <div className="col-6">
          <label><strong>Proyecto</strong></label>
          <br></br>
          <Dropdown /* value={} */ optionLabel="name"
            placeholder="Seleccionar proyecto" className="w-full md:w-14rem" />
        </div>
        <div className="col-6">
          <label><strong>Edición</strong></label>
          <br></br>
          <Dropdown /* value={} */ optionLabel="name"
            placeholder="Seleccionar edición" className="w-full md:w-14rem" />
        </div>
        <div className="col-6">
          <label><strong>Célula</strong></label>
          <br></br>
          <Dropdown /* value={} */ optionLabel="name"
            placeholder="Seleccionar célula" className="w-full md:w-14rem" />
        </div>

      </div>
      <Accordion multiple activeIndex={[0]}>
        {modulos && modulos.map(modulo => (
          <AccordionTab className='accordion-modulo' key={modulo.id} header={modulo.name}>

            <p className="m-0">+ Nuevo proyecto</p>
            {proyectos.map(proyecto => (
              <Accordion multiple activeIndex={[0]} key={proyecto.id}>
                <AccordionTab className='accordion-modulo' key={proyecto.id} header={proyecto.name}>
                  {ediciones.map(ediciones => (
                    <p className="m-0" key={ediciones.id}>- {ediciones.name} </p>
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
