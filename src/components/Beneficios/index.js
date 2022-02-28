import React from 'react'
import { Carousel } from './Carousel';

import './styles.css';

export const Beneficios = () => {
  return (
      <section className='Benenficios-container' id='beneficios'>
          {/* <img className='Benenficios-imagen' src={ require(`../../../assets/image/beneficio1.jpg`)} ></img> */}
          <Carousel />
      </section>
  )
}
