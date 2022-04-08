import React, { useState } from 'react'
import './styles.css'

import Logo from '../../../assets/logos/headerLogo.png'

// hook
import { useMoveSection } from '../../hook/useMoveSection'

export const Nav = ({ openModalQR }) => {
  const MVCid = "MVC";
  const beneficio = "beneficios";
  const FAQS = "FAQS";
  const MAPA = "Mapa"

  return (
    <React.Fragment>
      <header id='Nav' >
        <img src={Logo} alt='Logo Kuka'></img>

        <div className='navbar-titles'>
          <div className='Kukakcorp'>
            <h2>KUKACORP</h2>
            <div className='KukakorpMenu-container'>
              <h2 onClick={() => { useMoveSection(MVCid) }} >MISIÓN</h2>

              <h2 onClick={() => { useMoveSection(MVCid) }} >VISIÓN</h2>

              <h2 onClick={() => { useMoveSection(MVCid) }}>CONTACTO</h2>
            </div>
          </div>

          <div className='KukaIntro'>
            <div> <h2> KUKA INTRO</h2></div>
            <div className='KukaIntro-Menu'>
              <h2>INTRO</h2>
              <h2 onClick={() => { useMoveSection(MVCid) }} >QUÉ ES?</h2>
              <h2 onClick={() => { useMoveSection(MVCid) }}>INGREDIENTES</h2>
              <h2 onClick={() => { useMoveSection(MVCid) }}>INFORMACIÓN NUTRICIONAL</h2>
              <h2 onClick={() => { useMoveSection(beneficio) }}>BENEFICIOS</h2>
            </div>
          </div>

          <div className='KukaFAQS' > <h2 onClick={() => { useMoveSection(FAQS) }}>FAQS</h2> </div>

          <div className='KukaPuntosVenta'> <h2 onClick={() => { useMoveSection(MAPA) }}>PUNTOS DE VENTA</h2> </div>

          <div onClick={openModalQR} className="header-whatsapp" > <h2>WHATSAPP</h2> </div>
        </div>
      </header>
    </React.Fragment>
  )
}
