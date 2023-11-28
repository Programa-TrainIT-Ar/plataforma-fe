import React, { useState } from 'react'
import DateInitial from './DateInitial';
import SearchModule from './SearchModule';
import { InputTextarea } from 'primereact/inputtextarea';
import { InputText } from 'primereact/inputtext';
import { ButtonPrimary } from '../Button/Button';
import { Input } from '../Input/Input';

const ItemModule = () => {
  return (
    <form className='col-8'>
      <div className='flex flex-row m-1 p-1 justify-content-center align-content-center'>
        <Input size='large' header='Nombre del Modulo'/>
        <DateInitial/>
      </div>
      <div className='col-11 flex flex-column m-2'>
        <label className=''>Descripción</label>
        <InputTextarea placeholder='Objetivo del Módulo' rows={5} cols={30} />
      </div>
      <div className='flex justify-content-around p-2'>
        <SearchModule/>
        <ButtonPrimary header='Crear' color='black' size='medium' icon='' onclick=''/>
      </div>
    </form>
  )
}

export default ItemModule