import React from 'react'
import './styles.css'
import { Parallax, Background } from 'react-parallax';



import bg from '../../../assets/image/bg.jpg'

export const Introduction = () => {
    return (
        <section className='Introduction-container'>
            {/* <img className='Introduction-image' src={require(`../../../assets/image/bg.jpg`)} /> */}

            {/* parallax clavado */}
            {/* <img className='Introduction-image' style={{backgroundImage:`url(${bg})` }} /> */}

            <Parallax className='Introduction-image' bgImage={bg} bgImageAlt="bg" strength={-120}>

            </Parallax>

            {/* <Parallax strength={-200}>
                <Background className='Introduction-image' >
                    <img className='Introduction-image' src={require(`../../../assets/image/bg.jpg`)} />
                </Background>
            </Parallax> */}
        </section>
    )
}
