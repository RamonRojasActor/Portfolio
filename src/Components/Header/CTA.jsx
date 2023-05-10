import React from 'react'
import CV from '../../assets/CVRamónRojas.pdf' 

const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} className='btn' download>Currículum</a>
        <a href="#contact" className='btn btn-primary'>Contáctame</a>
    </div>
  )
}

export default CTA