
'use client'
import React from 'react';
import ItemModule from '../../../components/Modulos/ItemModule'
import FilterModule from '../../../components/Modulos/FilterModule';

const Modules = () => {
  return (
    <div className='flex flex-column justify-content-center m-auto'>
        <ItemModule/>
        <FilterModule/>
    </div>
  )
}

export default Modules