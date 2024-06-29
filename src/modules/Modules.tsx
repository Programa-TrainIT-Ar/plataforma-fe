import React from 'react';
import "../styles/modules style/modules-style.scss";
import { Accordion, AccordionTab } from 'primereact/accordion';
import { Dropdown } from 'primereact/dropdown';
import Modulo from "@types/modulo";
import Proyectos from "@types/proyecto";
import Ediciones from "@types/ediciones";



/* interface Modulo {
  id: string;
  name: string;
} */

interface ModulosProps {
  modulos: Modulo[];
  proyectos: Proyectos[];
  ediciones: Ediciones[];  
}

/* 
interface Proyectos {
  name: string;
  id: string;
}

interface Ediciones {
  name: string;
  id: string;
} */



const Modules: React.FC<ModulosProps> = ({ modulos, proyectos, ediciones }) => {
  return (
    <div className="modulos-container">
      <div className='grid'>
        <div className='col'>
      <h3>Modulos</h3>
      </div>
      <div className='col-fixed'>
      <button className='btn-color'>+</button>
      </div>
      </div>
      <div  className='grid'>
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
      <label><strong>Edicion</strong></label>
        <br></br>
      <Dropdown /* value={} */ optionLabel="name" 
    placeholder="Seleccionar edicion" className="w-full md:w-14rem" />
      </div>
      <div className="col-6">
      <label><strong>Celula</strong></label>
        <br></br>
      <Dropdown /* value={} */ optionLabel="name" 
    placeholder="Seleccionar celula" className="w-full md:w-14rem" />
      </div>

      </div>
      <Accordion multiple activeIndex={[0]}>
        {modulos && modulos.map(modulo => (
          <AccordionTab className='accordion-modulo' key={modulo.id} header={modulo.name}>
            
            <p className="m-0">+ Nuevo proyecto</p>
            {proyectos.map( proyecto =>(
            <Accordion multiple activeIndex={[0]}>  
            <AccordionTab className='accordion-modulo' key={proyecto.id} header={proyecto.name}>
            {ediciones.map(ediciones =>(
              <p className="m-0">- {ediciones.name} </p>
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
