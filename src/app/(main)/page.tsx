import React from 'react'
import { Button } from 'primereact/button'
import Image from 'next/image';
import homeImg from '../../../public/layout/images/home.png'
import objetivosImg from '../../../public/layout/images/objetivos.png'
import queHacemosImg from '../../../public/layout/images/que.png'
import quienesImg from '../../../public/layout/images/quienes.png'


const Main = () => {
  return (
    <main className='layout-main-container'>
      <section id='home' className='layout-main'>
        <div className='section-home'>
          <div className='container-text-home'>
            <h1>Creamos oportunidades</h1>
            <p>Forjando caminos en IT con proyectos reales.</p>
            <div className='text-center mt-4'>
              <Button rounded outlined size='large' label='LEARN MORE' />
            </div>
          </div>
          <div className='container-img-home'>
            <Image src={homeImg} alt='Home' style={{ width: '100%', height: '100%', }} />
          </div>
        </div>
      </section>

      <section id='aboutUs' className='layout-main'>
        <div className='container-aboutUs'>
          <div className='container-img-about'>
            <Image src={quienesImg} alt='Quienes Somos' style={{ width: '100%', height: '100%', }} />
          </div>
          <div className='container-text-about'>
            <h2>Quienes somos?</h2>
            <p>
              TrainIT es una plataforma de prácticas profesionales gratuitas para distintas carreras,
              donde los integrantes ganan experiencia desarrollando proyectos reales, siendo asesorados
              por seniors del área
            </p>
          </div>
        </div>

        <div className='container-aboutUs'>
          <div className='container-text-about'>
            <h2>Qué hacemos?</h2>
            <p>
              Prácticas profesionales gratuitas en distintas áreas laborales,
              se arman equipos multidisciplinarios para trabajar en proyectos.
            </p>
          </div>
          <div className='container-img-about'>
            <Image src={queHacemosImg} alt='Que Hacemos' style={{ width: '100%', height: '100%', }} />
          </div>
        </div>

        <div className='container-aboutUs'>
          <div className='container-img-about'>
            <Image src={objetivosImg} alt='Objetivos' style={{ width: '100%', height: '100%', }} />
          </div>
          <div className='container-text-about'>
            <h2>Objetivos</h2>
            <p>
              El objetivo es que los participantes amplíen sus portafolios con estas prácticas y mejoren
              su perfil profesional frente a las empresas de tecnología y así logren encontrar su primer
              empleo o mejorar el actual en el rubro IT.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Main;