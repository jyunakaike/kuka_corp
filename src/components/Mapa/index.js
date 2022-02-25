import React, { useState, useRef, useEffect } from 'react';
import './styles.css';

import mapa from '../../../assets/image/mapa.png';

import Locali1 from '../../../assets/logos/Localization1.png'
import Locali2 from '../../../assets/logos/Localization2.png'
import Locali3 from '../../../assets/logos/Localization3.png'


export const Mapa = () => {

  // const [onHover, setOnHover] = useState(false)
  // const [getRef, setGetRef] = useState()

  const [refe1, setrefe1] = useState(0)
  // const [refe2, setrefe2] = useState(false)
  // const [refe3, setrefe3] = useState(false)
  // const [refe4, setrefe4] = useState(false)
  // const [refe5, setrefe5] = useState(false)
  // const [refe6, setrefe6] = useState(false)

  const [icono, setIcono] = useState()

  const ref1 = useRef(null)
  const ref2 = useRef(null)
  const ref3 = useRef(null)
  const ref4 = useRef(null)
  const ref5 = useRef(null)
  const ref6 = useRef(null)



  const mouseIn = id => {

    (id === 1 && refe1 != 1) ? setrefe1(id) : setrefe1(0);
    (id === 2 && refe1 != 2) ? setrefe1(id) : null;
    (id === 3 && refe1 != 3) ? setrefe1(id) : null;
    (id === 4 && refe1 != 4) ? setrefe1(id) : null;
    (id === 5 && refe1 != 5) ? setrefe1(id) : null;
    (id === 6 && refe1 != 6) ? setrefe1(id) : null;

    // let temp = event.currentTarget.id;
    // setIcono(temp)
    // // console.log(temp)
    // console.log(refe1)

  }

  // useEffect(() => {
  //   (icono === 'icon1' ) ? setrefe1(1) :null;
  //   (icono === 'icon2' ) ? setrefe1(2) : null;
  //   (icono === 'icon3' ) ? setrefe1(3) : null;
  //   (icono === 'icon4' ) ? setrefe1(4) : null;
  //   (icono === 'icon5' ) ? setrefe1(5) : null;
  //   (icono === 'icon6' ) ? setrefe1(6) : null;
  // }, [icono, refe1])


  // const mouseIn = (refer , event) => {
  //   setOnHover(true)
  //   console.log(refer);


  //   // setGetRef(refer)
  // }


  // const mouseOut = () => {
  //   // let temp = event.currentTarget.id;
  //   // console.log(temp)
  //   // console.log(ref1.current.style.opacity)
  // }

  return (
    <section className='Mapa-container'>
      <div className="Mapa-title">
        <h2>PUNTOS DE VENTA</h2>
      </div>
      <img className='Mapa-img' src={mapa} alt="mapa" />

      {/* localization */}

      <div id='icon1' on onClick={() => mouseIn(1)} className='Mapa-localization iconLocalization1'></div>
      <div id='icon2' onClick={() => mouseIn(2)} className='Mapa-localization iconLocalization2'></div>
      <div id='icon3' onClick={() => mouseIn(3)} className='Mapa-localization iconLocalization3'></div>
      <div id='icon4' onClick={() => mouseIn(4)} className='Mapa-localization iconLocalization4'></div>
      <div id='icon5' onClick={() => mouseIn(5)} className='Mapa-localization iconLocalization5'></div>
      <div id='icon6' onClick={() => mouseIn(6)} className='Mapa-localization iconLocalization6'></div>


      {/* {
        (onHover) &&
      } */}

      {
        (refe1 === 1)
          ?
          <div ref={ref1} className='Mapa-detail-localization1'>
            <p>Funtional boot Camp</p>
            <div> <span>icono</span> <p>Radial 19</p> </div>
            <div> <span>Tel:</span> <p>78054922</p> </div>
            <div> <span>googlemap</span> <a href='https://goo.gl/maps/E7GKhp8kTQkScKXWA'><p> https://goo.gl/maps/E7GKhp8kTQkScKXWA </p></a> </div>
          </div>
          : null
      }
      {
        (refe1 === 2)
          ? <div ref={ref2} className='Mapa-detail-localization2'>
            <p>Funtional boot Camp</p>
            <div> <span>icono</span> <p>Radial 19</p> </div>
            <div> <span>Tel:</span> <p>78054922</p> </div>
            <div> <span>googlemap</span> <a href='https://goo.gl/maps/E7GKhp8kTQkScKXWA'><p> https://goo.gl/maps/E7GKhp8kTQkScKXWA </p></a> </div>
          </div>
          : null
      }
      {
        (refe1 === 3)
          ? <div ref={ref3} className='Mapa-detail-localization3'>
            <p>Funtional boot Camp</p>
            <div> <span>icono</span> <p>Radial 19</p> </div>
            <div> <span>Tel:</span> <p>78054922</p> </div>
            <div> <span>googlemap</span> <a href='https://goo.gl/maps/E7GKhp8kTQkScKXWA'><p> https://goo.gl/maps/E7GKhp8kTQkScKXWA </p></a> </div>
          </div>
          : null
      }
      {
        (refe1 === 4)
          ?
          <div ref={ref4} className='Mapa-detail-localization4'>
            <p>Funtional boot Camp</p>
            <div> <span>icono</span> <p>Radial 19</p> </div>
            <div> <span>Tel:</span> <p>78054922</p> </div>
            <div> <span>googlemap</span> <a href='https://goo.gl/maps/E7GKhp8kTQkScKXWA'><p> https://goo.gl/maps/E7GKhp8kTQkScKXWA </p></a> </div>
          </div>
          : null
      }
      {
        (refe1 === 5)
          ?
          <div ref={ref5} className='Mapa-detail-localization5'>
            <p>Funtional boot Camp</p>
            <div> <span>icono</span> <p>Radial 19</p> </div>
            <div> <span>Tel:</span> <p>78054922</p> </div>
            <div> <span>googlemap</span> <a href='https://goo.gl/maps/E7GKhp8kTQkScKXWA'><p> https://goo.gl/maps/E7GKhp8kTQkScKXWA </p></a> </div>
          </div>
          : null
      }
      {
        (refe1 === 6)
          ?
          <div ref={ref6} className='Mapa-detail-localization6'>
            <p>Funtional boot Camp</p>
            <div> <span>icono</span> <p>Radial 19</p> </div>
            <div> <span>Tel:</span> <p>78054922</p> </div>
            <div> <span>googlemap</span> <a href='https://goo.gl/maps/E7GKhp8kTQkScKXWA'><p> https://goo.gl/maps/E7GKhp8kTQkScKXWA </p></a> </div>
          </div>
          :
          null
      }












      {/* <img className='Mapa-localization iconLocalization1' src={Locali1} alt="mapa" /> */}
      {/* <img className='Mapa-localization iconLocalization2' src={Locali1} alt="mapa" /> */}
      {/* <img className='Mapa-localization iconLocalization3' src={Locali1} alt="mapa" /> */}
      {/* <img className='Mapa-localization iconLocalization4' src={Locali2} alt="mapa" /> */}
      {/* <img className='Mapa-localization iconLocalization5' src={Locali3} alt="mapa" /> */}
      {/* <img className='Mapa-localization iconLocalization6' src={Locali2} alt="mapa" /> */}

    </section>
  )
}
