import React from 'react';
import './styles.css';
import mapa from '../../../assets/image/mapa.jpg';



export const Mapa = () => {
  return (
      <section className='Mapa-container'>
        <img className='Mapa-img' src={mapa} alt="mapa" />
      </section>
  )
}
