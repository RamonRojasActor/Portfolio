import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {BsYoutube} from 'react-icons/bs'

const Socials = () => {
  return (
    <div className='header__socials'>
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
  )
}

export default Socials