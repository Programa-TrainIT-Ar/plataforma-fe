'use client'
import React from 'react'
import { useFetch } from '../../../hook/UseFetch';
import { NavLink } from 'react-bootstrap';

export default function ListaModulo() {
  const { data } = useFetch('http://localhost:5000/modules')

  return (
      <div className='col-12 flex flex-wrap justify-content-center align-content-center m-1'>
        {data?.map((user) => (
          <NavLink href='./' className='listaModulos col-4' key={user.id}>
            <img className=' border-round-3xl' src={`/images/${user.image}`} alt='modulo'/>
            <h2>{user.name}</h2>
            </NavLink>
          ))}
    </div> 
  );
}


