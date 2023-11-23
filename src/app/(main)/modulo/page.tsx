'use client'
import React from 'react'
import { useFetch } from '../../../hook/UseFetch';

export default function ListaModulo() {
  const { data } = useFetch('http://localhost:5000/modules')

  return (
      <div className='col-12 flex flex-wrap justify-content-center align-content-center m-1'>
        {data?.map((user) => (
          <div className='card col-4 m-1' key={user.id}>
            <img className=' border-round-3xl' src='{user.image}' alt='modulo'></img>
            <h2>{user.name}</h2>
            </div>
          ))}
    </div> 
  );
}


