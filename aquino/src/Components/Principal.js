import Nav from './Nav'

import React from 'react'

const Principal = () => {
  return (
    <>
     <Nav/>
    <div className='w-scree h-[100vh] fondoprincipal z-3 flex flex-col items-center justify-center'>
    <div className="fondonegro w-full h-screen absolute"></div>
        <div className='relative z-5 flex flex-col items-center' > 
            <h1 className='text-9xl text-white' >Consultoria Aquino</h1>
            <h2 className='text-3xl text-white' >Soluciones Tecnologicas para tu Empresa</h2>
        </div>

    
    </div>
    </>
    
  )
}

export default Principal