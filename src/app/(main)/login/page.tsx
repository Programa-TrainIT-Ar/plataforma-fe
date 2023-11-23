'use client'
import React from 'react'
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';

const login = () => {
  return (
        <div className="card col-6 flex flex-column justify-content-center">
          <div className='flex justify-content-center'>
                <img src={`/layout/images/Logo_trainit_color.png`} alt='logo' />
              </div>
            <div className="flex flex-column md:flex-row">
                <form className="w-full md:w-5 m-auto flex flex-column align-items-center justify-content-center gap-3 py-5">
                    <div className="flex flex-wrap align-items-center gap-2">
                        <label className="w-6rem">Username</label>
                        <InputText id="username" type="text" required className="w-12rem  border-round-2xl" />
                    </div>
                    <div className="flex flex-wrap align-items-center gap-2">
                        <label className="w-6rem">Password</label>
                        <InputText id="password" type="password" required className="w-12rem border-round-2xl" />
                    </div>
                    <span>¿Olvidaste tu contraseña?</span>
                    <div className="flex flex-wrap align-items-center gap-2">
                    <Button label="INGRESAR" icon="pi pi-user" className="w-10rem mx-auto  border-round-3xl" ></Button>
                    <a href="/modulo">ingresar</a>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default login