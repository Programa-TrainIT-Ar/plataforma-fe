import React from 'react'
import { Button } from 'primereact/button';

const Login = async () => {
  return (
    <div className="layout-wrapper">
      <div className="layout-main-container">
        <div className="layout-main flex flex-column">
          <h3 className='text-center'>Bienvenido a TrainIT</h3>
          <h5 className='text-center'>Inicie sesión</h5>
          <div className='flex justify-content-center'>
            <a href="/api/auth/login">
              <Button className='font-bold' label='Login' rounded icon='pi pi-user' />
            </a>
          </div>
        </div>
      </div>
      <div className="layout-mask"></div>
    </div>
  )
}

export default Login