import React, { useState, useRef } from 'react';
import './styles.css';

import mapa from '../../../assets/image/maps1.png';
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
  const ref5 = useRef(null)
  const ref6 = useRef(null)



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

  // const mouseHover = (id) => {
  //   console.log("is in");

  //   (id === 1 ) ? setrefe(id) : null;
  //   (id === 2 ) ? setrefe(id) : null;
  //   (id === 3 ) ? setrefe(id) : null;
  //   (id === 4 ) ? setrefe(id) : null;
  //   (id === 5 ) ? setrefe(id) : null;
  //   (id === 6 ) ? setrefe(id) : null;
  // }

  // const mouseLeave = ()=> {
  //   console.log("is out");
  //   setrefe(0);
  // }

  return (


    <section className='Mapa-container' id='Mapa'>
      <div className="Mapa-title">
        <h1>PUNTOS DE VENTA</h1>
      </div>
      <img className='Mapa-img' src={mapa} alt="mapa" />

      {/* localization */}

      <div id='icon1' onClick={() => mouseIn(1)} className='Mapa-localization iconLocalization1'></div>
      <div id='icon2' onClick={() => mouseIn(2)} className='Mapa-localization iconLocalization2'></div>
      <div id='icon3' onClick={() => mouseIn(3)} className='Mapa-localization iconLocalization3'></div>
      <div id='icon4' onClick={() => mouseIn(4)} className='Mapa-localization iconLocalization4'></div>
      <div id='icon5' onClick={() => mouseIn(5)} className='Mapa-localization iconLocalization5'></div>
      <div id='icon6' onClick={() => mouseIn(6)} className='Mapa-localization iconLocalization6'></div>


      {/* <div id='icon1' onClick={() => mouseIn(1)} onMouseOver={()=> mouseHover(1)} onMouseLeave={mouseLeave}  className='Mapa-localization iconLocalization1'></div>
      <div id='icon2' onClick={() => mouseIn(2)} onMouseOver={()=> mouseHover(2)} onMouseLeave={mouseLeave} className='Mapa-localization iconLocalization2'></div>
      <div id='icon3' onClick={() => mouseIn(3)} onMouseOver={()=> mouseHover(3)} onMouseLeave={mouseLeave} className='Mapa-localization iconLocalization3'></div>
      <div id='icon4' onClick={() => mouseIn(4)} onMouseOver={()=> mouseHover(4)} onMouseLeave={mouseLeave} className='Mapa-localization iconLocalization4'></div>
      <div id='icon5' onClick={() => mouseIn(5)} onMouseOver={()=> mouseHover(5)} onMouseLeave={mouseLeave} className='Mapa-localization iconLocalization5'></div>
      <div id='icon6' onClick={() => mouseIn(6)} onMouseOver={()=> mouseHover(6)} onMouseLeave={mouseLeave} className='Mapa-localization iconLocalization6'></div> */}

      {/* {
        (onHover) &&
      } */}

      {
        (refe1 === 1) || (refe === 1)
          ?
          <div ref={ref1} className='Mapa-detail Mapa-detail-localization1'>
            <div className='Mapa-detail-title' >
              <p>Bici Taller Recycling Santa Cruz</p>  <IoMdCloseCircle onClick={closeDirection} size={'3rem'} />
            </div>
            <div> <span>Dirección</span> <p>Av. Radial 27</p> </div>
            <div> <span>Tel:</span> <p>60912287</p> </div>
            <div> <span>googlemap</span> <a href='https://goo.gl/maps/vmHqZPu98aoZcWHs7'><p>https://goo.gl/maps/vmHqZPu98aoZcWHs7 </p></a> </div>
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
            <div> <span>googlemap</span> <a href='https://goo.gl/maps/yU4eKBSdd6gAWFpy5'><p> https://goo.gl/maps/yU4eKBSdd6gAWFpy5 </p></a> </div>
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
            <div> <span>googlemap</span> <a href='https://goo.gl/maps/NaKKR6quuquTgGRJ6'><p>https://goo.gl/maps/NaKKR6quuquTgGRJ6</p></a> </div>
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
            <div> <span>googlemap</span> <a href='https://goo.gl/maps/AjuYgYavERBfy9ps9'><p> https://goo.gl/maps/AjuYgYavERBfy9ps9</p></a> </div>
          </div>
          : null
      }
      {/* {
        (refe1 === 5) || (refe === 5)
          ?
          <div ref={ref5} className='Mapa-detail Mapa-detail-localization5'>
            <div className='Mapa-detail-title' >
              <p>Funtional boot Camp</p>  <IoMdCloseCircle onClick={closeDirection} size={'3rem'} />
            </div>
            <div> <span>icono</span> <p>Radial 19</p> </div>
            <div> <span>Tel:</span> <p>78054922</p> </div>
            <div> <span>googlemap</span> <a href='https://goo.gl/maps/E7GKhp8kTQkScKXWA'><p> https://goo.gl/maps/E7GKhp8kTQkScKXWA </p></a> </div>
          </div>
          : null
      }
      {
        (refe1 === 6) || (refe === 6)
          ?
          <div ref={ref6} className='Mapa-detail Mapa-detail-localization6'>

            <div className='Mapa-detail-title' >
              <p>Funtional boot Camp</p>  <IoMdCloseCircle onClick={closeDirection} size={'3rem'} />
            </div>
            <div> <span>icono</span> <p>Radial 19</p> </div>
            <div> <span>Tel:</span> <p>78054922</p> </div>
            <div> <span>googlemap</span> <a href='https://goo.gl/maps/E7GKhp8kTQkScKXWA'><p> https://goo.gl/maps/E7GKhp8kTQkScKXWA </p></a> </div>
          </div>
          :
          null
      } */}

      {/* <img className='Mapa-localization iconLocalization1' src={Locali1} alt="mapa" /> */}
      {/* <img className='Mapa-localization iconLocalization2' src={Locali1} alt="mapa" /> */}
      {/* <img className='Mapa-localization iconLocalization3' src={Locali1} alt="mapa" /> */}
      {/* <img className='Mapa-localization iconLocalization4' src={Locali2} alt="mapa" /> */}
      {/* <img className='Mapa-localization iconLocalization5' src={Locali3} alt="mapa" /> */}
      {/* <img className='Mapa-localization iconLocalization6' src={Locali2} alt="mapa" /> */}

    </section>
  )
}
