import React from 'react'
import Link from 'next/link';
import { Button } from 'primereact/button';


const Login = () => {
  return (
    <>
      <h3 className='text-center'>Bienvenido a TrainIT</h3>
      <h5 className='text-center'>Inicie sesión</h5>
      <div className='flex justify-content-center'>
        <a href="/api/auth/login">
          <Button className='font-bold' label='Login' rounded icon='pi pi-user' />
        </a>
      </div>
    </>
  )
}

export default Login