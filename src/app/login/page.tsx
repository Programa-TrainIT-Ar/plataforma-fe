import React from 'react'
import { Button } from 'primereact/button';
import Image from 'next/image';

const Login = async () => {
  return (
    <div className="layout-wrapper containerLogin">
      <div className="layout-main-container coverLogin">
        <div className="layout-main flex flex-column align-items-center">
          <Image src={'/layout/images/logo.png'} alt='TrainIT' width={200} height={200} />
          {/* <h3 className='text-center'>Bienvenido a TrainIT</h3> */}
          <h3 className='text-center'>Inicie sesión</h3>
          <div className='flex justify-content-center'>
            <a href="/api/auth/login">
              <Button className='font-bold' label='Login' rounded icon='pi pi-user'  size="large" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login