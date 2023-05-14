import React from 'react'
import '../../Styles/Contact.css'
import {BsWhatsapp} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'

const Contact = () => {
  return (
    <section id='contact'>
      <h2>Contacta conmigo</h2>
      <div className='container contact__container'>

        <div className='contact__options'>
          <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            <h5>+34 600 117 518</h5>
            <a href="https://wa.me/600117518" 
              target="_blank" 
              rel="noreferrer">
              Contacta (Web)
            </a>

            <a href="whatsapp://send?phone=34600117518"
              target="_blank" 
              rel="noreferrer">
              Contacta (App)
            </a>
          </article>

          <article className='contact__option'>
            <BsLinkedin className='contact__option-icon'/>
            <h4>Linkedin</h4>
            <h5>Ramón Rojas Valera</h5>
            <a href="https://www.linkedin.com/in/ram%C3%B3n-rojas-valera-537485261/" 
              target="_blank" 
              rel="noreferrer">
              Contacta (Web)
            </a>
          </article>

          <article className='contact__option'>
            <BsInstagram className='contact__option-icon'/>
            <h4>Instagram</h4>
            <h5>Ramón Rojas</h5>
            <a href="https://www.instagram.com/ramonrojasvalera/" 
              target="_blank" 
              rel="noreferrer">
              Contacta (Web)
            </a>
          </article>
        </div>

        <div>
          <p>Correo Electrónico: ramonrojasactor@gmail.com</p>
          <p>Teléfono: +34 600 117 518</p>
        </div>
        
        
        { /*Formulario para enviar correo
        <form action="">
          
            <input type="text" name='name'  placeholder='Nombre y Apellidos' required/>

            <input type="email" placeholder='Ej: placeholder@mail.com' required/>
            
            <textarea name="message"  rows="10" required></textarea>
            <button type='submit' className='btn btn-primary'>Contactar</button>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=ramonrojasactor@gmail.com"
              target="_blank" 
              rel="noreferrer">
              Contacta (Gmail)
            </a>
        </form>
       */}
      </div>
    </section>


  )
}

export default Contact