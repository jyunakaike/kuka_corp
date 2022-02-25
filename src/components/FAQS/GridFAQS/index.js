import React, { useState } from 'react'
import './styles.css'

export const GridFAQS = ({ id, question, answer }) => {
    const [hover, setHover] = useState(false)

    const MouseOut = () =>{
        setHover(false)
    }
    const MouseIn = () =>{
        setHover(true)
    }
    return (
            <div onMouseOver={MouseIn} onMouseOut={MouseOut} className='FAQS-grid'>
                {(hover)? <p>{answer} </p>  : <p>{question}</p>}
            </div>
    )
}
