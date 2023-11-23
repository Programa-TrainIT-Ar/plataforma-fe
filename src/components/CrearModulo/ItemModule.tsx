import React, { useState } from 'react'
import DateInitial from './DateInitial';
import SearchModule from './SearchModule';
import { InputTextarea } from 'primereact/inputtextarea';
import { InputText } from 'primereact/inputtext';

const ItemModule = () => {
  return (
    <form className='col-8'>
      <div className='flex flex-wrap justify-content-center align-content-center'>
        <div className='col-5 flex flex-column m-2'>
          <label>Nombre del Módulo</label>
          <InputText type="text" />
        </div>
        <div className='col-6 flex flex-column m-2'>
          <label>Fecha de Inicio</label>
          <DateInitial/>
        </div>
      </div>
      <div className='col-11 flex flex-column m-2'>
        <label className=''>Descripción</label>
        <InputTextarea placeholder='Objetivo del Módulo' rows={5} cols={30} />
      </div>
      <div className='flex justify-content-around p-2'>
        <SearchModule/>
        <button type='submit' className=' border-round-2xl mr-1'>Crear <i className='pi pi-plus ml-1'></i></button>
      </div>
    </form>
  )
}

export default ItemModule