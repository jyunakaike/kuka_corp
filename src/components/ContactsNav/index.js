import React from 'react'
import './styles.css'
import { ImFacebook } from 'react-icons/Im'
import { RiInstagramFill } from 'react-icons/ri'
import { IoLogoWhatsapp } from 'react-icons/io'



export const ContactsNav = ({ openModalQR }) => {
  return (
    <div className='ContactsNav'>
      <p><ImFacebook /></p>
      <a href='https://www.instagram.com/kukacorp/' target="_blank" ><p><RiInstagramFill /></p></a>
      {/* <p><RiInstagramFill /></p> */}
      <p><IoLogoWhatsapp style={{ cursor: 'pointer' }} onClick={openModalQR} /></p>
    </div>
  )
}
