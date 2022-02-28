import React, { useState } from 'react'

import { ModalContainer } from './ModalContainer';
import './styles.css'

import Logo from '../../../assets/logos/headerLogo.png'

export const Nav = () => {
  // for modal
  const [openModal, setOpenModal] = useState(false);

  const openModalQR = () => {
    setOpenModal(true)
  }

  return (
    <React.Fragment>
      <header >
        <img src={Logo}></img>

        <div className='navbar-titles'>

          <div className='Kukakcorp'>
            <h2>KUKACORP</h2>
            <div className='KukakorpMenu-container'>
              <h2>MISIÓN</h2>

              <h2>VISIÓN</h2>

              <h2>CONTACTO</h2>
            </div>
          </div>

          <div className='KukaIntro'>
            <div> <h2> KUKA INTRO</h2></div>
            <div className='KukaIntro-Menu'>
              <h2>INTRO</h2>
              <h2>QUÉ ES?</h2>
              <h2>INGREDIENTES</h2>
              <h2>INFORMACIÓN NUTRICIONAL</h2>
              <h2>BENEFICIOS</h2>
            </div>
          </div>

          <div> <h2>FAQS</h2> </div>
          <div> <h2>PUNTOS DE VENTA</h2> </div>
          <div onClick={openModalQR} className="header-whatsapp" > <h2>WHATSAPP</h2> </div>
        </div>
      </header>
      {
        (openModal) &&
        <ModalContainer setOpenModal={setOpenModal} />
      }
    </React.Fragment>
  )
}
