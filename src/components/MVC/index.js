import React, { useState, useEffect, useRef } from 'react';
import './styles.css'

import Logo from '../../../assets/logos/MVCeye.png';

import hand from '../../../assets/image/hand.png'

import { IoIosArrowDown } from 'react-icons/io'

// hook
import { useMoveSection } from '../../hook/useMoveSection'

export const MVC = () => {
    const element = useRef(null)
    const [show, setShow] = useState(false)

    const MVCid = "MVC";

    useEffect(() => {
        const observer = new window.IntersectionObserver((entries) => {
            const { isIntersecting } = entries[0]
            if (isIntersecting) {
                setShow(true)
                observer.disconnect()
            }
        })
        observer.observe(element.current)
    }, [element])


    return (
        <div className='MVC-container-background' id='MVC'>
            <span><IoIosArrowDown onClick={() => { useMoveSection(MVCid) }} className='MVC-container-arrowDown' /></span>
            <div ref={element} className='MVC-cards-container'>
                {
                    show &&
                    <React.Fragment>
                        <div className='MVC-card'>
                            <img src={Logo} alt='LogoMVC'></img>
                            <h1>MISIÓN</h1>
                            <p>Nuestra misión es perdurar el uso de la hoja de coca ofreciéndola en una presentación innovadora, higiénica y práctica</p>
                        </div>
                        <div className='MVC-card'>
                            <img src={Logo} alt='LogoMVC'></img>
                            <h1>VISIÓN</h1>
                            <p>Kukacorp es una empresa líder comprometida con la elaboración de productos que contribuyan a la consolidación de una sociedad donde se promueva la integración, se celebre la diversidad y se compartan los valores de la tierra.
                            </p>
                        </div>
                        <div className='MVC-card'>
                            <img src={Logo} alt='LogoMVC'></img>
                            <h1>CONTACTO</h1>
                            <p><span>Kukacorp S.R.L. <br /></span> 67983109</p>
                        </div>
                    </React.Fragment>
                }
            </div>

            <div ref={element} className='MVC-detail-container' >
                {
                    show &&
                    <React.Fragment>
                        <div className='MVC-detail-title'>
                            <h1>¿QUÉ ES?</h1>
                            <p>KUKA ES UN SUPLEMENTO A BASE DE EXTRACTO DE LA HOJA DE COCA ORGÁNICA.</p>
                            <h1>INGREDIENTES</h1>
                            <p>EXTRACTO DE HOJA DE COCA ORGÁNICA.</p>
                        </div>
                        <div className='MVC-detail-torquel-wrapper'>
                            <h1>Información Nutricional</h1>
                            <div className='MVC-detail-torquel' >
                                <div className='MVC-detail-torquel-container'>
                                    <div></div>
                                    <div></div>
                                    <div>% Valor Diario</div>
                                </div>
                                <div className='MVC-detail-torquel-container'>
                                    <div>Energía (Kcal)</div>
                                    <div>418 Kcal</div>
                                </div>
                                <div className='MVC-detail-torquel-container'>
                                    <div>Grasa Total</div>
                                    <div>0g</div>
                                    <div>0%</div>
                                </div>

                                <div className='MVC-detail-torquel-container'>
                                    <div>Colesterol</div>
                                    <div>0g</div>
                                    <div>0%</div>
                                </div>
                                <div className='MVC-detail-torquel-container'>
                                    <div>Sodio</div>
                                    <div>0g</div>
                                    <div>0%</div>
                                </div>
                                <div className='MVC-detail-torquel-container'>
                                    <div>Carbohidratos Totales </div>
                                    <div>418g</div>
                                    <div>152%</div>
                                </div>
                                <div className='MVC-detail-torquel-container'>
                                    <div>Fibra</div>
                                    <div>3g</div>
                                    <div>11%</div>
                                </div>
                                <div className='MVC-detail-torquel-container'>
                                    <div>Proteína</div>
                                    <div>10g</div>
                                    <div>20%</div>
                                </div>
                                <div className='MVC-detail-torquel-container'>
                                    <div>Calcio</div>
                                    <div>450mg</div>
                                    <div>35%</div>
                                </div>
                                <div className='MVC-detail-torquel-container'>
                                    <div>Hierro</div>
                                    <div>3.43mg</div>
                                    <div>20%</div>
                                </div>
                            </div>
                        </div>
                    </React.Fragment>
                }
            </div>

            <img className='MVC-hand' src={hand} alt='hand' />
        </div>
    )
}




