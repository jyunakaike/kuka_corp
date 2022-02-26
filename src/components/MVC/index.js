import React, { useState, useEffect, useRef } from 'react';
import './styles.css'

import Logo from '../../../assets/logos/MVCeye.png';
import Nutri from '../../../assets/image/nutricionalinfo.png'
import hand from '../../../assets/image/hand.png'

import  {IoIosArrowDown}  from 'react-icons/io'

export const MVC = () => {
    const element = useRef(null)
    const [show, setShow] = useState(false)

    useEffect(() => {
        const observer = new window.IntersectionObserver((entries) => {
            const { isIntersecting } = entries[0]

            console.log(isIntersecting)
            if (isIntersecting) {
                setShow(true)
                observer.disconnect()
            }
        })
        observer.observe(element.current)
    }, [element])


    return (
        <div className='MVC-container-background'>
            <span><IoIosArrowDown className='MVC-container-arrowDown' /></span>
            <div ref={element} className='MVC-cards-container'>
                {
                    show &&
                    <React.Fragment>
                        <div className='MVC-card'>
                            <img src={Logo}></img>
                            <h1>MISIÓN</h1>
                            <p>Nuestra misión es perdurar el uso de la hoja de coca ofreciéndola en una presentación innovadora, higiénica y práctica</p>
                        </div>
                        <div className='MVC-card'>
                            <img src={Logo}></img>
                            <h1>VISIÓN</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                        </div>
                        <div className='MVC-card'>
                            <img src={Logo}></img>
                            <h1>CONTACTO</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                        </div>
                    </React.Fragment>
                }
            </div>

            <div ref={element} className='MVC-detail-container' >
                {
                    show &&
                    <React.Fragment>
                        <div className='MVC-detail-title'>
                            <h1>QUÉ ES?</h1>
                            <p>KUKA ES UN SUPLEMENTO A BASE DE EXTRACTO DE LA HOJA DE COCA ORGÁNICA.</p>
                            <h1>INGREDIENTES</h1>
                            <p>EXTRACTO DE HOJA DE COCA ORGÁNICA.</p>
                        </div>
                        <div className='MVC-detail-title'>
                            <h1>INFORMACIÓN NUTRICIONAL</h1>
                            < img src={Nutri} />
                        </div>
                    </React.Fragment>
                }
            </div>

            <img className='MVC-hand' src={hand} />
        </div>
    )
}




