import React from 'react'
import './styles.css'
import { Parallax, Background } from 'react-parallax';



import bg from '../../../assets/image/bg.jpg'


const image2 = "https://images.unsplash.com/photo-1498092651296-641e88c3b057?auto=format&fit=crop&w=1778&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D"

export const Introduction = () => {
    return (
        // <Parallax bgImageStyle={{height: '100%', width: '100%', minWidth:'1000px'}}  className='Introduction-container' bgImage={image2} strength={150}>
        // </Parallax>
        <Parallax bgImageStyle={{height: '110%', width: '100%', minWidth:'1000px'}}  className='Introduction-container' bgImage={bg} strength={150}>
            {/* <div>aola</div> */}
        </Parallax>

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
