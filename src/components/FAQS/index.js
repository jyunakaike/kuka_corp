import React, { useState, useEffect, useRef } from 'react';
import './styles.css';

import { GridFAQS } from './GridFAQS';
import initialState from '../../db/db.js'

import { IoIosArrowUp } from 'react-icons/io'


export const FAQS = () => {
  const list = initialState.FAQList;

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

  return (
    <section className='FAQS-container'>
      <h1> FAQS</h1>

      <div ref={element} className='FAQS-grids' >
        {show &&
          list.map((array) =>
            <GridFAQS key={array.id} id={array.id} question={array.pregunta} answer={array.respuesta} ></GridFAQS>
          )
        }
      </div>
      <div className='FAQS-pagination'>
        aqui hay una paginacion
      </div>
      <IoIosArrowUp className='FAQS-arrowUp' />
    </section>
  )
}
