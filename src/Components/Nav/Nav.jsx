import React from 'react'
import '../../Styles/Nav.css'
import {BiUserPin} from 'react-icons/bi'
import {MdContactPage} from 'react-icons/md'
import {IoHome} from 'react-icons/io5'
import {MdNewspaper} from 'react-icons/md'
import {GiClassicalKnowledge} from 'react-icons/gi'
import { useState } from 'react'

const Nav = () => {
  //cambiar lo del portfolio por las noticias 
  const [activeSection, setActiveSection] = useState('#')
  
  return (
    <nav>
      <a href="#" 
        className={activeSection === '#' ? 'active' : ''}
        onClick={() => setActiveSection('#')}>
          <IoHome />
      </a>

      <a href="#about" 
        className={activeSection === '#about' ? 'active' : ''}
        onClick={() => setActiveSection('#about')}>
          <BiUserPin />
      </a>

      <a href="#experience" 
        className={activeSection === '#experience' ? 'active' : ''}
        onClick={() => setActiveSection('#experience')}>
          <GiClassicalKnowledge />
      </a>

      <a href="#news" 
        className={activeSection === '#news' ? 'active' : ''}
        onClick={() => setActiveSection('#news')}>
          <MdNewspaper />
      </a>

      <a href="#contact" 
        className={activeSection === '#contact' ? 'active' : ''}
        onClick={() => setActiveSection('#contact')}>
          <MdContactPage />
      </a>

    </nav>
  )
}

export default Nav