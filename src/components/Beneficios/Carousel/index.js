import React, { useRef, useEffect } from 'react'
import './styles.css'

import img1 from '../../../../assets/image/beneficio1.png'
import img2 from '../../../../assets/image/beneficio2.png'
import img3 from '../../../../assets/image/beneficio3.png'


export const Carousel = () => {

    const slideshow = useRef(null)
    const intervaloslideshow = useRef(null)

    const next = () => {
        if (slideshow.current.children.length > 0) {
            // obtenenemos el primer elemento del slideshow
            const primerElemento = slideshow.current.children[0];
            // Establecemos la transicionpara el slideshow
            slideshow.current.style.transition = `800ms ease-out all`;

            const slideSize = slideshow.current.children[0].offsetWidth;
            // Movemos el siguienteSlideshow 
            slideshow.current.style.transform = `translateX(-${slideSize}px)`;

            const transition = () => {
                // que no tenga transicion 
                slideshow.current.style.transition = 'none';
                // regresarlo al valor de 0
                slideshow.current.style.transform = 'translateX(0)';
                // tomamos el primer elemento y lo mandamos al final 
                slideshow.current.appendChild(primerElemento);

                slideshow.current.removeEventListener('transitionend', transition)
            }
            slideshow.current.addEventListener('transitionend', transition);
        }
    }

    const prev = () => {
        // console.log('anterior');
        // para regresar al ultimo elemento semanda del ultimo al primero 
        if (slideshow.current.children.length > 0) {
            // obtener elultimoelemento del slideshow
            const index = slideshow.current.children.length - 1;
            const ultimoElemento = slideshow.current.children[index];
            slideshow.current.insertBefore(ultimoElemento, slideshow.current.firstChild);

            // que no tenga transicion
            slideshow.current.style.transition = 'none';

            const slideSize = slideshow.current.children[0].offsetWidth;
            slideshow.current.style.transform = `translateX(-${slideSize}px)`;

            setTimeout(() => {
                slideshow.current.style.transition = `800ms ease-out all`;
                slideshow.current.style.transform = `translateX(0)`;
            }, 30);
        }
    }

    useEffect(() => {
        intervaloslideshow.current = setInterval(() => {
            next();
        }, 5000);

        slideshow.current.addEventListener('mouseenter', ()=> {
            clearInterval(intervaloslideshow.current);
        });

        // resume 
        slideshow.current.addEventListener('mouseleave', ()=> {
            intervaloslideshow.current = setInterval(() => {
                next();
            }, 5000);
        });
    }, [])

    return (
        <div className='Carousel-container' >
            <div className='Carousel-slide' ref={slideshow}>
                <img src={img1} alt="beneficio1" ></img>
                <img src={img2} alt="beneficio1" ></img>
                <img src={img3} alt="beneficio1" ></img>
            </div>
            <div className='Carousel-controles'>
                <button onClick={prev} className='Carousel-controles-izquierda'>
                    <span>izquierda</span>
                </button>
                <button onClick={next} className='Carousel-controles-derecha'>
                    <span>derecha</span>
                </button>
            </div>
            {/* <div className='Carousel-slide'>
                <img src={img2} alt="beneficio1" ></img>
            </div>
            <div className='Carousel-slide'>
                <img src={img3} alt="beneficio1" ></img>
            </div> */}

        </div>
    )
}
