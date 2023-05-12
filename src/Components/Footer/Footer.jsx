import React from 'react'
import '../../Styles/Footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {BsYoutube} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='logo'>Ramón Rojas</a>

      <ul className='links'>
        <li><a href="#">Inicio</a></li>
        <li><a href="#about">Sobre mí</a></li>
        <li><a href="#news">Noticias recientes</a></li>
        <li><a href="#contact">Contacto</a></li>
      </ul>

      <div className="socials">
        <a href="https://www.linkedin.com/in/ram%C3%B3n-rojas-valera-537485261/" 
          target="_blank" 
          rel="noreferrer"><BsLinkedin /></a>

        <a href="https://www.instagram.com/ramonrojasvalera/" 
          target="_blank" 
          rel="noreferrer"><BsInstagram /></a>

        <a href="https://www.youtube.com/@ramonrojasactor615" 
          target="_blank" 
          rel="noreferrer"><BsYoutube /></a>
      </div>

      <div className='copyright'>
        <small >Made by Gerard Ferre &copy;</small>
      </div>
    </footer>
  )
}

export default Footer