import React from 'react'
import CV from '../../assets/CV_test.pdf' 

const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} className='btn' download>Currículum</a>
        <a href="#contact" className='btn btn-primary'>Contáctame</a>
    </div>
  )
}

export default CTA