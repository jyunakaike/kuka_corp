import React, { useRef, useState , useEffect } from 'react';
import './styles.css';

import { Parallax } from 'react-parallax';
import { IoIosArrowForward } from 'react-icons/io';
import { IoIosArrowBack } from 'react-icons/io';

import bg from '../../../assets/image/IntroBackground.jpg';
import bg2 from '../../../assets/image/IntroBackgroundcarousel.jpg';

import nubes from '../../../assets/image/IntroBackgroundNubes.png'

// buton
import button1 from '../../../assets/logos/3000botom.jpg';
import button2 from '../../../assets/logos/abuelacoca.jpg';
import button3 from '../../../assets/logos/nutrientes.jpg';
import button4 from '../../../assets/logos/espiritualidad.jpg';

// detail
import Intro3k from '../../../assets/image/Intro3000.png'
import IntroAbuela from '../../../assets/image/abuelacoca.png'
import IntroNutricion from '../../../assets/image/Intronutricion.png'
import IntroEspiritual from '../../../assets/image/Introespiritual.png'

export const Introduction = () => {
    const slideshow = useRef(null);
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        window.addEventListener("scroll", listenToScroll);
        return () => {
            window.removeEventListener("scroll",listenToScroll)
        };
    }, []);

    const listenToScroll = () => {
        let heightoHide = 70;
        const winScroll= document.body.scrollTop || document.documentElement.scrollTop;
        if(winScroll> heightoHide){
            setIsVisible(false)
        }
        else{
            setIsVisible(true);
        }
    }

    const next = () => {
        if (slideshow.current.children.length > 0) {
            // obtenenemos el primer elemento del slideshow
            const primerElemento = slideshow.current.children[0];
            // Establecemos la transicionpara el slideshow
            slideshow.current.style.transition = `1000ms ease-out all`;

            const slideSize = slideshow.current.children[0].offsetWidth;
            // console.log(slideSize)
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

    const element0 = () => {
        if (slideshow.current.children.length > 0) {
            // obtenenemos el primer elemento del slideshow
            const primerElemento = slideshow.current.children[0];
            // Establecemos la transicionpara el slideshow
            slideshow.current.style.transition = `1000ms ease-out all`;

            const slideSize = slideshow.current.children[0].offsetWidth;
            // Movemos el siguienteSlideshow 

            let controles = document.getElementById("controles").style;
            controles.display = "none";
            slideshow.current.style.transform = `translateX(-${slideSize}px)`;

            const transition = () => {
                // que no tenga transicion 
                slideshow.current.style.transition = 'none';
                // regresarlo al valor de 0
                slideshow.current.style.transform = 'translateX(0)';
                // tomamos el primer elemento y lo mandamos al final 
                slideshow.current.appendChild(primerElemento);
                controles.display = "";

                slideshow.current.removeEventListener('transitionend', transition)
            }
            slideshow.current.addEventListener('transitionend', transition);
        }
    }

    const element1 = () => {
        if (slideshow.current.children.length > 0) {
            // obtenenemos el primer elemento del slideshow

            const primerElemento = slideshow.current.children[0];
            const segundoElemento = slideshow.current.children[1];
            // Establecemos la transicionpara el slideshow
            slideshow.current.style.transition = `1000ms ease-out all`;

            const slideSize = (slideshow.current.children[0].offsetWidth) * 2;
            // Movemos el siguienteSlideshow 
            let controles = document.getElementById("controles").style;
            controles.display = "none";

            slideshow.current.style.transform = `translateX(-${slideSize}px)`;

            const transition = () => {


                // que no tenga transicion 
                slideshow.current.style.transition = 'none';
                // regresarlo al valor de 0
                slideshow.current.style.transform = 'translateX(0)';

                // tomamos el primer elemento y lo mandamos al final 
                slideshow.current.appendChild(primerElemento);
                slideshow.current.appendChild(segundoElemento);

                controles.display = "";
                slideshow.current.removeEventListener('transitionend', transition)
            }
            slideshow.current.addEventListener('transitionend', transition);
        }
    }

    const element2 = () => {
        if (slideshow.current.children.length > 0) {
            // obtenenemos el primer elemento del slideshow
            const primerElemento = slideshow.current.children[0];
            const segundoElemento = slideshow.current.children[1];
            const tercerElemento = slideshow.current.children[2];
            // Establecemos la transicionpara el slideshow
            slideshow.current.style.transition = `1000ms ease-out all`;

            const slideSize = (slideshow.current.children[0].offsetWidth) * 3;
            // Movemos el siguienteSlideshow 
            // console.log(slideSize)

            let controles = document.getElementById("controles").style;
            controles.display = "none";

            slideshow.current.style.transform = `translateX(-${slideSize}px)`;

            const transition = () => {
                // que no tenga transicion 
                slideshow.current.style.transition = 'none';
                // regresarlo al valor de 0
                slideshow.current.style.transform = 'translateX(0)';

                // tomamos el primer elemento y lo mandamos al final 
                slideshow.current.appendChild(primerElemento);
                slideshow.current.appendChild(segundoElemento);
                slideshow.current.appendChild(tercerElemento);

                controles.display = "";

                slideshow.current.removeEventListener('transitionend', transition)
            }
            slideshow.current.addEventListener('transitionend', transition);
        }
    }

    const element3 = () => {
        if (slideshow.current.children.length > 0) {
            // obtenenemos el primer elemento del slideshow
            const primerElemento = slideshow.current.children[0];
            const segundoElemento = slideshow.current.children[1];
            const tercerElemento = slideshow.current.children[2];
            const cuartoElemento = slideshow.current.children[3];
            // Establecemos la transicionpara el slideshow
            slideshow.current.style.transition = `1000ms ease-out all`;

            const slideSize = (slideshow.current.children[0].offsetWidth) * 4;
            // Movemos el siguienteSlideshow 

            let controles = document.getElementById("controles").style;
            controles.display = "none";
            slideshow.current.style.transform = `translateX(-${slideSize}px)`;

            const transition = () => {
                // que no tenga transicion 
                slideshow.current.style.transition = 'none';
                // regresarlo al valor de 0
                slideshow.current.style.transform = 'translateX(0)';

                // tomamos el primer elemento y lo mandamos al final 
                slideshow.current.appendChild(primerElemento);
                slideshow.current.appendChild(segundoElemento);
                slideshow.current.appendChild(tercerElemento);
                slideshow.current.appendChild(cuartoElemento);
                controles.display = "";
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



    return (
        <div className="Introduction-allContainer">

            <div className='Introduction-container' ref={slideshow}>
                <Parallax
                    bgImageStyle={{ height: '110%', width: '100%', minWidth: '100px' }}
                    className='Introduction-container-bg1'
                    bgImage={bg}
                    strength={600}
                    contentClassName={'Introduction-container-bg1-div'}
                >
                    {
                        (isVisible)
                            ?
                            <img className='Introduction-container-bg1-logo' src={nubes} alt={'Nubes'} />
                            : 
                            <img className='Introduction-container-bg1-logoOut' src={nubes} alt={'Nubes'} />
                }

                    {/* <div className='Intro-button'> <img onClick={element0} src={button1} /> </div> */}
                </Parallax>

                <Parallax
                    bgImageStyle={{ height: '100%', width: '100%', minWidth: '410px' }}
                    className='Introduction-container-bg0'
                    bgImage={bg2}
                    strength={150}
                    contentClassName={'Intro-button-container'}
                >
                    <div className='Intro-button'> <img onClick={element0} src={button1} alt={'3000M.S.N.M'}/> </div>
                    <div className='Intro-button'> <img onClick={element1} src={button2} alt={'abuela-Coca'}/> </div>
                    <div className='Intro-button'> <img onClick={element2} src={button3} alt={'Nutrientes'}/></div>
                    <div className='Intro-button'> <img onClick={element3} src={button4} alt={'Espiritualidad'}/> </div>
                </Parallax>

                <Parallax
                    bgImageStyle={{ height: '100%', width: '100%', minWidth: '410px' }}
                    className='Introduction-container-bg1'
                    bgImage={bg2}
                    strength={500}
                    contentClassName={'Intro-3000-container'}
                >
                    <img className='Intro-3000-detail' src={Intro3k} alt={'Detail3000M.S.N.M.'} />
                </Parallax>

                <Parallax
                    bgImageStyle={{ height: '100%', width: '100%', minWidth: '410px' }}
                    className='Introduction-container-bg1'
                    bgImage={bg2}
                    strength={500}
                    contentClassName={'Intro-3000-container'}
                >
                    <img className='Intro-3000-detail' src={IntroAbuela} alt={'DetailAbuelaCoca'} />
                </Parallax>

                <Parallax
                    bgImageStyle={{ height: '100%', width: '100%', minWidth: '410px' }}
                    className='Introduction-container-bg1'
                    bgImage={bg2}
                    strength={500}
                    contentClassName={'Intro-nutricion-container'}>
                    <img className='Intro-nutricion-detail' src={IntroNutricion} alt={'DetailNutrientes'} />
                </Parallax>

                <Parallax
                    bgImageStyle={{ height: '100%', width: '100%', minWidth: '410px' }}
                    className='Introduction-container-bg1'
                    bgImage={bg2}
                    strength={500}
                    contentClassName={'Intro-3000-container'}
                >
                    <img className='Intro-3000-detail' src={IntroEspiritual}  alt={'DetailEspiritualidad'}  />
                </Parallax>
            </div>

            <div className='Introduction-controles' id='controles' >
                <button onClick={prev} className='Introduction-controles-izquierda'>
                    <IoIosArrowBack className='Introduction-arrow' />
                </button>
                <button onClick={next} className='Introduction-controles-derecha'>
                    <IoIosArrowForward className='Introduction-arrow' />
                </button>
            </div>

            <div className='Introduction-image' > </div>

        </div>
    )
}
