import React, { useRef, useEffect } from 'react'
import './styles.css'

import { Parallax } from 'react-parallax';
import { IoIosArrowForward } from 'react-icons/io'
import { IoIosArrowBack } from 'react-icons/io'


import bg from '../../../assets/image/IntroBackground.png'
import bg2 from '../../../assets/image/IntroBackgroundcarousel.jpg'


// buton
import button1 from '../../../assets/logos/3000botom.jpg';
import button2 from '../../../assets/logos/abuelacoca.jpg';
import button3 from '../../../assets/logos/nutrientes.jpg';
import button4 from '../../../assets/logos/espiritualidad.jpg';

// Logo

import Logo1 from '../../../assets/logos/3000logo.png';


// detail
import Intro3k from '../../../assets/image/Intro3000.png'
import IntroAbuela from '../../../assets/image/abuelacoca.png'
import IntroNutricion from '../../../assets/image/Intronutricion.png'
import IntroEspiritual from '../../../assets/image/Introespiritual.png'


export const Introduction = () => {
    const slideshow = useRef(null);


    const next = () => {
        if (slideshow.current.children.length > 0) {
            // obtenenemos el primer elemento del slideshow
            const primerElemento = slideshow.current.children[0];
            // Establecemos la transicionpara el slideshow
            slideshow.current.style.transition = `1000ms ease-out all`;

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
    


    // useEffect(() => {
    //     // ese code lo hace para que recorra
    //     // intervaloslideshow.current = setInterval(() => {
    //     //     next();
    //     // }, 5000);

    //     // slideshow.current.addEventListener('mouseenter', () => {
    //     //     clearInterval(intervaloslideshow.current);
    //     // });

    //     // resume 
    //     // slideshow.current.addEventListener('mouseleave', () => {
    //     //     intervaloslideshow.current = setInterval(() => {
    //     //         next();
    //     //     }, 7000);
    //     // });
    // }, [])



    return (
        <div className="Introduction-allContainer">

            <div className='Introduction-container' ref={slideshow}>
                <Parallax bgImageStyle={{ height: '100%', width: '100%', minWidth: '410px' }} className='Introduction-container-bg1' bgImage={bg} strength={150}>
                </Parallax>

                {/* <Parallax
                    bgImageStyle={{ height: '100%', width: '100%', minWidth: '410px' }}
                    className='Introduction-container-bg1'
                    bgImage={bg2}
                    strength={150}
                    contentClassName={'Intro-button-container'}
                >
                    <img src={button1} />
                    <img src={button2} />
                    <img src={button3} />
                    <img src={button4} />
                </Parallax> */}

                <Parallax
                    bgImageStyle={{ height: '100%', width: '100%', minWidth: '410px' }}
                    className='Introduction-container-bg1'
                    bgImage={bg2}
                    strength={150}
                    contentClassName={'Intro-3000-container'}
                >
                    {/* <img className='Intro-3000-logo' src={Logo1} />
                    <div className='Intro-3000-detail' >
                        A 3000 m.s.n.m. crece la planta de coca, cultivada tradicionalmente hace más de 4500 años. Nuestra misión es perdurar el uso de esta planta medicinal milenaria, ofreciéndola en una presentación innovadora, limpia y práctica.
                        KUKA activa tus sentidos, te reconecta contigo mismo y te permite alcanzar tu maximo potencial.
                        Nuestros procesos de Elaboración nos entregan un producto inocuo, libre de microorganismos y agroquímicos.
                    </div> */}
                    <img className='Intro-3000-detail' src={Intro3k} />



                </Parallax>

                <Parallax 
                    bgImageStyle={{ height: '100%', width: '100%', minWidth: '410px' }}    
                    className='Introduction-container-bg1' 
                    bgImage={bg2} 
                    strength={150}
                    contentClassName={'Intro-3000-container'}
                >
                    <img className='Intro-3000-detail' src={IntroAbuela} />


                </Parallax>

                <Parallax 
                    bgImageStyle={{ height: '100%', width: '100%', minWidth: '410px' }} 
                    className='Introduction-container-bg1' 
                    bgImage={bg2} 
                    strength={150}  
                    contentClassName={'Intro-3000-container'}>
                <img className='Intro-3000-detail' src={IntroNutricion} />
                
                
                </Parallax>

                <Parallax 
                    bgImageStyle={{ height: '100%', width: '100%', minWidth: '410px' }} 
                    className='Introduction-container-bg1' 
                    bgImage={bg2} 
                    strength={150} 
                    contentClassName={'Intro-3000-container'}
                >
                <img className='Intro-3000-detail' src={IntroEspiritual} />
                </Parallax>

                {/* <Parallax bgImageStyle={{ height: '100%', width: '100%', minWidth: '410px' }} className='Introduction-container-bg1' bgImage={bg} strength={150}>
                </Parallax> */}

            </div>


            {/* <Parallax bgImageStyle={{ height: '100%', width: '100%', minWidth: '410px' }} className='Introduction-container' bgImage={bg} strength={150}>
            </Parallax> */}

            <div className='Introduction-controles'>
                <button onClick={prev} className='Introduction-controles-izquierda'>
                    <IoIosArrowBack className='Introduction-arrow' />
                </button>
                <button onClick={next} className='Introduction-controles-derecha'>
                    <IoIosArrowForward className='Introduction-arrow' />
                </button>
            </div>

            <div className='Introduction-image' > </div>

        </div>


        // {/* <div>aola</div> */}
        // <Parallax bgImageStyle={{height: '100%', width: '100%', minWidth:'1000px'}}  className='Introduction-container' bgImage={image2} strength={150}>
        // </Parallax>


        // , maxWidth: '75px', opacity: '.5'

        // </Parallax>
        // <section className='Introduction-container'>
        //     {/* <img className='Introduction-image' src={require(`../../../assets/image/bg.jpg`)} /> */}

        //     {/* parallax clavado */}
        //     {/* <img className='Introduction-image' style={{backgroundImage:`url(${bg})` }} /> */}

        //     {/* <Parallax className='Introduction-image' bgImage={bg} bgImageAlt="bg" strength={-120}>

        //     </Parallax> */}

        //     {/* <Parallax className='Introduction-image' strength={-120}>
        //         <Background className='Introduction-image' >
        //             <img className='Introduction-image' src={require(`../../../assets/image/bg.jpg`)} />
        //         </Background>
        //     </Parallax> */}
        // </section>
    )
}
