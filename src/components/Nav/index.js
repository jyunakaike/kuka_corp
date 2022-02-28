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

  const MVCid = "MVC";
  const beneficio = "beneficios";
  const FAQS = "FAQS";
  const MAPA = "Mapa"

  const moveSection = (id) => {
    // window.location.replace("/#MVC")
    let element = document.getElementById(id)

    // document.querySelector('.MVC-container-background').scrollIntoView({ behavior: 'smooth' })

    element.scrollIntoView({behavior: "smooth"})
  }

  return (
    <React.Fragment>
      <header >
        <img src={Logo}></img>

        <div className='navbar-titles'>

          <div className='Kukakcorp'>
            <h2>KUKACORP</h2>
            <div className='KukakorpMenu-container'>
              <h2 onClick={() => { moveSection(MVCid) }} >MISIÓN</h2>

              <h2 onClick={() => { moveSection(MVCid) }} >VISIÓN</h2>

              <h2 onClick={() => { moveSection(MVCid) }}>CONTACTO</h2>
            </div>
          </div>

          <div className='KukaIntro'>
            <div> <h2> KUKA INTRO</h2></div>
            <div className='KukaIntro-Menu'>
              <h2>INTRO</h2>
              <h2 onClick={() => { moveSection(MVCid) }} >QUÉ ES?</h2>
              <h2 onClick={() => { moveSection(MVCid) }}>INGREDIENTES</h2>
              <h2 onClick={() => { moveSection(MVCid) }}>INFORMACIÓN NUTRICIONAL</h2>
              <h2 onClick={() => { moveSection(beneficio) }}>BENEFICIOS</h2>
            </div>
          </div>

          <div className='KukaFAQS' > <h2 onClick={() => { moveSection(FAQS) }}>FAQS</h2> </div>
          <div className='KukaPuntosVenta'> <h2 onClick={() => { moveSection(MAPA) }}>PUNTOS DE VENTA</h2> </div>
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
