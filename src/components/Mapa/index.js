import React from 'react';
import './styles.css';

import mapa from '../../../assets/image/mapa.png';

import Locali1 from '../../../assets/logos/Localization1.png'
import Locali2 from '../../../assets/logos/Localization2.png'
import Locali3 from '../../../assets/logos/Localization3.png'


export const Mapa = () => {
  return (
      <section className='Mapa-container'>
        <div className="Mapa-title">
          <h2>PUNTOS DE VENTA</h2>
        </div>
        <img className='Mapa-img' src={mapa} alt="mapa" />

        {/* localization */}

        <div className='Mapa-localization iconLocalization1'></div>
        <div className='Mapa-localization iconLocalization2'></div>
        <div className='Mapa-localization iconLocalization3'></div>
        <div className='Mapa-localization iconLocalization4'></div>
        <div className='Mapa-localization iconLocalization5'></div>
        <div className='Mapa-localization iconLocalization6'></div>




        {/* <img className='Mapa-localization iconLocalization1' src={Locali1} alt="mapa" /> */}
        {/* <img className='Mapa-localization iconLocalization2' src={Locali1} alt="mapa" /> */}
        {/* <img className='Mapa-localization iconLocalization3' src={Locali1} alt="mapa" /> */}
        {/* <img className='Mapa-localization iconLocalization4' src={Locali2} alt="mapa" /> */}
        {/* <img className='Mapa-localization iconLocalization5' src={Locali3} alt="mapa" /> */}
        {/* <img className='Mapa-localization iconLocalization6' src={Locali2} alt="mapa" /> */}

      </section>
  )
}
