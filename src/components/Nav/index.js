import React, { useState } from 'react'

import { ModalContainer } from './ModalContainer';
import './styles.css'

import { KukakorpMenu } from './KukakorpMenu';
import { KukaIntro} from './KukaIntro';

import Logo from '../../../assets/logos/headerLogo.png'

export const Nav = () => {
  // for modal
  const [openModal, setOpenModal] = useState(false);
  const [openMenukukacorp, setOpenMenukukacorp] = useState(false);
  const [openMenuIntro, setOpenMenuIntro] = useState(false);

  const openModalQR = () => {
    setOpenModal(true)
  }

  const kukacorpClick = () => {
    setOpenMenukukacorp(!openMenukukacorp)
  }

  const kukaintroClick = () => {
    setOpenMenuIntro(!openMenuIntro)
  }

  return (
    <React.Fragment>
      <header >
        <img src={Logo}></img>
        
        <ul>
          <div className='Kukakcorp'>
            <li onClick={kukacorpClick}>
             <h2>KUKACORP</h2>
            </li> 
            {
              (openMenukukacorp) &&
              <KukakorpMenu />
            }
          </div>

          <div className='KukaIntro'>
            <li onClick={kukaintroClick}> <h2> KUKA INTRO</h2></li>
            {
              (openMenuIntro) &&
              <KukaIntro />
            }
          </div>
          
          <li> <h2>FAQS</h2> </li>
          <li> <h2>PUNTOS DE VENTA</h2> </li>
          <li onClick={openModalQR} > <h2>WHATSAPP</h2> </li>
        </ul>

      </header>
      {
        (openModal) &&
        <ModalContainer setOpenModal={setOpenModal} />
      }
    </React.Fragment>
  )
}
