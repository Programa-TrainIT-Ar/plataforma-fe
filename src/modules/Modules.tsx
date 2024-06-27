import React from 'react';
import "../styles/modules style/modules-style.scss";
import { Accordion, AccordionTab } from 'primereact/accordion';
import { Dropdown } from 'primereact/dropdown';


interface Modulo {
  id: string;
  name: string;
}

interface ModulosProps {
  modulos: Modulo[];
  proyectos: Proyectos[];
  
}


interface Proyectos {
  name: string;
  id: string;
}





const Modules: React.FC<ModulosProps> = ({ modulos, proyectos }) => {
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
            <p className="m-0">- Proyecto 1</p>
            <p className="m-0">- Proyecto 2</p>
            <p className="m-0">- Proyecto 3</p>
            </AccordionTab>
        ))}
      </Accordion>
    </div>
  );
};

export default Modules;
