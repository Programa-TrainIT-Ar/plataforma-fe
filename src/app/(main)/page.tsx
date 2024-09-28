import React from 'react'
import Link from 'next/link'
import { Button } from 'primereact/button'

const Main = () => {
  return (
    <div>
      <h1>Main</h1>
      <Link href={'/intra/dashboard'}>
        <Button label='Plataforma TrainIT' />
      </Link>
    </div>
  );
};

export default Main;
