import React, { useState, useEffect, useRef } from 'react';
import './styles.css'

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
            <span>flecha</span>
            <div ref={element} className='MVC-cards-container'>
                {
                    show &&
                    <React.Fragment>
                        <div className='MVC-card'>
                            <p>icono</p>
                            <h2>MISIÓN</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                        </div>
                        <div className='MVC-card'>
                            <p>icono</p>
                            <h2>VISIÓN</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                        </div>
                        <div className='MVC-card'>
                            <p>icono</p>
                            <h2>CONTACTO</h2>
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
                            <h2> Qué es</h2>
                            <p> KUKA ES UN SUPLEMENTO NUTRICIONAL A BASE DE EXTRACTO DE HOJA DE COCA ORGÁNICA</p>
                            <h2> INGREDIENTES</h2>
                            <p> EXTRACTO DE HOJA DE COCA ORGANICA</p>
                        </div>
                        <div className='MVC-detail-title'>
                            <h2> INFORMACIÓN NUTRICIONAL</h2>
                            <p>aqui hay informacion del adicional </p>
                        </div>
                    </React.Fragment>

                }

            </div>
        </div>
    )
}




