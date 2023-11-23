
'use client'
import React from 'react';
import ItemModule from '../../../components/CrearModulo/ItemModule'
import FilterModule from '../../../components/CrearModulo/FilterModule';

const CrearModules = () => {
  return (
    <div className='flex flex-column justify-content-center m-auto'>
        <ItemModule/>
        <FilterModule/>
    </div>
  )
}

export default CrearModules