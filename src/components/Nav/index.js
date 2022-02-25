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
              KUKACORP
            </li> 
            {
              (openMenukukacorp) &&
              <KukakorpMenu />
            }
          </div>

          <div className='KukaIntro'>
            <li onClick={kukaintroClick}>KUKA INTRO</li>
            {
              (openMenuIntro) &&
              <KukaIntro />
            }
          </div>
          
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
