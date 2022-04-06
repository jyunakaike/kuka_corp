import React, { useState, useEffect, useRef } from 'react';
import './styles.css';

import { GridFAQS } from './GridFAQS';
import initialState from '../../db/db.js'

import { IoIosArrowUp } from 'react-icons/io'
import { useMoveSection } from '../../hook/useMoveSection'

import ProductIcon from '../../../assets/image/faqProduct.png'

export const FAQS = () => {
  const list = initialState.FAQList;

  const element = useRef(null)
  const [show, setShow] = useState()

  const Nav = "Nav";



  useEffect(() => {
    const observer = new window.IntersectionObserver((entries) => {
      const { isIntersecting } = entries[0]

      if (isIntersecting) {
        setShow(true)
        observer.disconnect()
      }
    })
    observer.observe(element.current)
  }, [element])


  // for wavyText
  useEffect(() => {
    const wavyText = document.querySelector('.FAQS-arrowUp-wavy-text');
    wavyText.innerHTML = wavyText.textContent.replace(/\S/g, "<span>$&</span>");
    // console.log(wavyText)


    const wavyElement = document.querySelectorAll('span');
    for (let i = 0; i < wavyElement.length; i++) {
      wavyElement[i].style.animationDelay = i * 0.05 + 's';
    }
  }, []);

  return (
    <section className='FAQS-container' id='FAQS'>
      <h1> FAQS</h1>
      <div ref={element} className='FAQS-grids' >
        {show &&
          list.map((array) =>
            <GridFAQS key={array.id} id={array.id} question={array.pregunta} answer={array.respuesta} ></GridFAQS>
          )
        }
        <div></div>
        <div className='FAQS-grids-arrow'>
          <IoIosArrowUp onClick={() => { useMoveSection(Nav) }} className='FAQS-arrowUp' />
          <div className='FAQS-arrowUp-wavy'>
            <p className='FAQS-arrowUp-wavy-text' >Volver&nbsp;Arriba </p>
          </div>
        </div>
        <div></div>
      </div>
      <div className='FAQS-pagination'>
      </div>
      {/* <IoIosArrowUp onClick={() => { useMoveSection(Nav) }} className='FAQS-arrowUp' />
      <div className='FAQS-arrowUp-wavy'>
        <p className='FAQS-arrowUp-wavy-text' >Volver&nbsp;Arriba </p>
      </div> */}

      {/* bg product icon */}
      <div className='FAQS-container-iconbg1'>
        <img src={ProductIcon} className='FAQS-product1' alt='Product-left' />
      </div>

      <div className='FAQS-container-iconbg2'>
        <img src={ProductIcon} className='FAQS-product2' alt='Product-right' />
      </div>

    </section>
  )
}
