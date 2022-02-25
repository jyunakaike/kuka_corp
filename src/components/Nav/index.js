import React, { useState } from 'react'

import { ModalContainer } from './ModalContainer';


import './styles.css'
import { KukakorpMenu } from './KukakorpMenu';

export const Nav = () => {
  // for modal
  const [openModal, setOpenModal] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  const openModalQR = () => {
    setOpenModal(true)
  }

  const kukacorpClick = () => {
    setOpenMenu(!openMenu)
  }

  return (
    <React.Fragment>
      <header >
        <h1>Kuka</h1>
        <ul>
          <div className='Kukakcorp'>
            <li onClick={kukacorpClick}>
              KUKACORP
            </li> {
              (openMenu) &&
              <KukakorpMenu />
            }
          </div>
          <li>KUKA INTRO</li>
          <li>FAQS</li>
          <li>PUNTOS DE VENTA</li>
          <li onClick={openModalQR} >WHATSAPP</li>
        </ul>

      </header>
      {
        (openModal) &&
        <ModalContainer setOpenModal={setOpenModal} />
      }
    </React.Fragment>
  )
}
