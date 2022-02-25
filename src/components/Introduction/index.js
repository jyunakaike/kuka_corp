import React from 'react'
import './styles.css'
import { Parallax, Background } from 'react-parallax';

import paper from '../../../assets/image/headerBg.png'
import bg from '../../../assets/image/IntroBackground.png'

export const Introduction = () => {
    return (
        <div className="Introduction-allContainer">
            
            <Parallax bgImageStyle={{ height: '100%', width: '100%', minWidth: '1000px' }} className='Introduction-container' bgImage={bg} strength={150}>
                
            </Parallax>
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
