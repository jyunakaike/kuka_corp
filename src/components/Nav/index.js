import React, { useState } from 'react'

import { ModalContainer } from './ModalContainer';


import './styles.css'

export const Nav = () => {
  // for modal
  const [openModal, setOpenModal] = useState(false);

  const openModalQR = () => {
    setOpenModal(true)
  }
  return (
    <header >
      <h1>Kuka</h1>
      <ul>
        <li>KUKACORP</li>
        <li>KUKA INTRO</li>
        <li>AQS</li>
        <li>PUNTOS DE VENTA</li>
        <li onClick={openModalQR} >QR</li>
      </ul>



      {
        (openModal) && 
        <ModalContainer  setOpenModal ={setOpenModal}/>
      }
    </header>
  )
}
