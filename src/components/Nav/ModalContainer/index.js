import React, { useEffect } from 'react'
import './styles.css'

import {IoMdCloseCircle} from 'react-icons/io';

import Qr from '../../../../assets/image/Qr.png'

export const ModalContainer = ({ setOpenModal }) => {

    useEffect(() => {
        document.body.style.overflow = 'hidden';
    }, [])


    const closeModal = () => {
        document.body.style.overflow = 'unset';
        setOpenModal(false)
    }
    return (
        <React.Fragment>
            <div className='ModalContainer-overlay' >
                <div className='ModalContainer-overlay-container '>
                    <div className='ModalContainer-right'>
                        <div className='ModalContainer-Close' onClick={closeModal} > <IoMdCloseCircle  /> </div>
                    </div>
                    <div className='ModalContainer-element'>
                        <h2>CHAT WHATSAPP</h2>
                        <img src={Qr}></img>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
