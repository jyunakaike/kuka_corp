import React, { useEffect } from 'react'
import './styles.css'

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
                        <div className='ModalContainer-Close' onClick={closeModal} > X </div>
                    </div>
                    <div className='ModalContainer-element'>Aqui viene el QR</div>
                </div>

            </div>
        </React.Fragment>
    )
}
