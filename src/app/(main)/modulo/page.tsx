'use client'
import React from 'react'
import { useFetch } from '../../../hook/UseFetch';

export default function ListaModulo() {
  const { data } = useFetch('http://localhost:5000/modules')

  return (
      <div className=''>
        {data?.map((user) => (
          <div className='card' key={user.id}>
            <img src={user.image} alt='modulo'></img>
            <h2>{user.name}</h2>
            </div>
          ))}
    </div>
  );
}


