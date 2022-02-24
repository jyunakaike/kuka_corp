import React, { useState } from 'react'
import './styles.css'

export const GridFAQS = ({ length }) => {
    const [hover, setHover] = useState(false)

    const MouseOut = () =>{
        setHover(false)
    }
    const MouseIn = () =>{
        setHover(true)
    }
    return (
        <React.Fragment>
            <div onMouseOver={MouseIn} onMouseOut={MouseOut} className='FAQS-grid'>
                {(hover)? <p> Respuesta {length} </p>  : <p> Pregunta {length}</p>}
            </div>
        </React.Fragment>
    )
}
