import React from 'react'
import './styles.css'
import {ImFacebook } from  'react-icons/Im'
import {RiInstagramFill} from 'react-icons/ri'
import {IoLogoWhatsapp} from 'react-icons/io'

 

export const ContactsNav = () => {
  return (
    <div className='ContactsNav'>
        <p><ImFacebook /></p>
        <p><RiInstagramFill /></p>
        <p><IoLogoWhatsapp /></p>
    </div>
  )
}
