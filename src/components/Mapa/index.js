import React, { useState, useRef } from 'react';
import './styles.css';

import mapa from '../../../assets/image/maps.png';
import { IoMdCloseCircle } from 'react-icons/io';

import Locali1 from '../../../assets/logos/Localization1.png'
import Locali2 from '../../../assets/logos/Localization2.png'
import Locali3 from '../../../assets/logos/Localization3.png'


export const Mapa = () => {

  // const [onHover, setOnHover] = useState(false)
  // const [getRef, setGetRef] = useState()

  const [refe1, setrefe1] = useState(0)
  const [refe, setrefe] = useState(0)


  const ref1 = useRef(null)
  const ref2 = useRef(null)
  const ref3 = useRef(null)
  const ref4 = useRef(null)

  const mouseIn = id => {

    (id === 1 && refe1 != 1) ? setrefe1(id) : setrefe1(0);
    (id === 2 && refe1 != 2) ? setrefe1(id) : null;
    (id === 3 && refe1 != 3) ? setrefe1(id) : null;
    (id === 4 && refe1 != 4) ? setrefe1(id) : null;
    (id === 5 && refe1 != 5) ? setrefe1(id) : null;
    (id === 6 && refe1 != 6) ? setrefe1(id) : null;
  }
  const closeDirection = () => {
    setrefe1(0);
  }

  return (


    <section className='Mapa-container' id='Mapa'>
      <div className="Mapa-title">
        <h1>PUNTOS DE VENTA</h1>
      </div>
      <img className='Mapa-img' src={mapa} alt="mapa" />

      {/* localization */}

      <img src={Locali2} id='icon1' onClick={() => mouseIn(1)} className='Mapa-localization iconLocalization1' alt={'Icon1'}/>
      <img src={Locali1} id='icon2' onClick={() => mouseIn(2)} className='Mapa-localization iconLocalization2' alt={'Icon2'}/>
      <img src={Locali1} id='icon3' onClick={() => mouseIn(3)} className='Mapa-localization iconLocalization3' alt={'Icon3'}/>
      <img src={Locali2} id='icon4' onClick={() => mouseIn(4)} className='Mapa-localization iconLocalization4' alt={'Icon4'}/>
      {/* <div id='icon5' onClick={() => mouseIn(5)} className='Mapa-localization iconLocalization5'></div>
      <div id='icon6' onClick={() => mouseIn(6)} className='Mapa-localization iconLocalization6'></div> */}

      {
        (refe1 === 1) || (refe === 1)
          ?
          <div ref={ref1} className='Mapa-detail Mapa-detail-localization1'>
            <div className='Mapa-detail-title' >
              <p>Bici Taller Recycling Santa Cruz</p>  <IoMdCloseCircle onClick={closeDirection} size={'3rem'} />
            </div>
            <div> <span>Dirección</span> <p>Av. Radial 27</p> </div>
            <div> <span>Tel:</span> <p>60912287</p> </div>
            <div> <span>googlemap</span> <a href='https://goo.gl/maps/vmHqZPu98aoZcWHs7' target="_blank" ><p>https://goo.gl/maps/vmHqZPu98aoZcWHs7 </p></a> </div>
          </div>
          : null
      }
      {
        (refe1 === 2) || (refe === 2)
          ? <div ref={ref2} className='Mapa-detail Mapa-detail-localization2'>
            <div className='Mapa-detail-title' >
              <p>Calistenia Bolivia – El Cristo</p>  <IoMdCloseCircle onClick={closeDirection} size={'3rem'} />
            </div>
            <div> <span>Dirección</span> <p>C/ Padre R Melgar</p> </div>
            <div> <span>Tel:</span> <p>73196937</p> </div>
            <div> <span>googlemap</span> <a href='https://goo.gl/maps/yU4eKBSdd6gAWFpy5' target="_blank" ><p> https://goo.gl/maps/yU4eKBSdd6gAWFpy5 </p></a> </div>
          </div>
          : null
      }
      {
        (refe1 === 3) || (refe === 3)
          ? <div ref={ref3} className='Mapa-detail Mapa-detail-localization3'>
            <div className='Mapa-detail-title' >
              <p> 039 Functional Boot Camp</p>  <IoMdCloseCircle onClick={closeDirection} size={'3rem'} />
            </div>
            <div> <span>Dirección</span> <p>Av. Radial 19</p> </div>
            <div> <span>Tel:</span> <p>78054922</p> </div>
            <div> <span>googlemap</span> <a href='https://goo.gl/maps/NaKKR6quuquTgGRJ6' target="_blank" ><p>https://goo.gl/maps/NaKKR6quuquTgGRJ6</p></a> </div>
          </div>
          : null
      }
      {
        (refe1 === 4) || (refe === 4)
          ?
          <div ref={ref4} className='Mapa-detail Mapa-detail-localization4'>
            <div className='Mapa-detail-title' >
              <p>Sir Pieper Resto - Bar</p>  <IoMdCloseCircle onClick={closeDirection} size={'3rem'} />
            </div>
            <div> <span>Dirección</span> <p>Zona Rio Piraí</p> </div>
            <div> <span>Tel:</span> <p>77606555</p> </div>
            <div> <span>googlemap</span> <a href='https://goo.gl/maps/AjuYgYavERBfy9ps9' target="_blank" ><p> https://goo.gl/maps/AjuYgYavERBfy9ps9</p></a> </div>
          </div>
          : null
      }
    </section>
  )
}
