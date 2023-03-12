import React from 'react'
import '../../Styles/Header.css'
import CTA from './CTA'
import Socials from './Socials'
import Slider from './Slider'

const Header = () => {

  return (
    <header>
      <div className="container header__container">
        <h1>Ramón Rojas</h1>
        <h3 className='text-light'>Actor</h3>
        <CTA />
        <Socials />
        <div className='me'>
          <Slider />
        </div>

        {/* <a href="#contact" className='scroll__down'>Contacto</a> */}

      </div>
    </header>
  )
}

export default Header