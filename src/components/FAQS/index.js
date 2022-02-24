import React, { useState, useEffect, useRef } from 'react';
import './styles.css';

import { GridFAQS } from './GridFAQS';



export const FAQS = () => {
  const element = useRef(null)
  const [show, setShow] = useState()

  useEffect(() => {
    const observer = new window.IntersectionObserver((entries) => {
      const { isIntersecting } = entries[0]

      console.log(isIntersecting)
      if (isIntersecting) {
        setShow(true)
        observer.disconnect()
      }
    })
    observer.observe(element.current)
  }, [element])

  const arrays=[1,2,3,4,5,6,7,8,9,10,11,12]

  return (
    <section className='FAQS-container'>
      <h2> FAQS</h2>

      <div ref={element} className='FAQS-grids' >
        {show &&
          arrays.map( (array)=> 
            <GridFAQS key={array.key} length= {array} ></GridFAQS>
          )
        }
      </div>
      <div className='FAQS-pagination'>
        aqui hay una paginacion
      </div>
      <div>
        <span>Volver arriba</span>
      </div>
    </section>
  )
}
