import React from 'react'
import '../../Styles/Contact.css'
import {BsWhatsapp} from 'react-icons/bs'
const Contact = () => {
  return (
    <section id='contact'>
      <h2>Contacta conmigo</h2>
      <div className='container contact__container'>

        <div className='contact__options'>
          <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            <h5>+722503555</h5>
            <a href="https://wa.me/722503555">Contacta</a>
          </article>
        </div>


        {/*Formulaio para enviar correo*/}
        <form action="">
          
            <input type="text" name='name'  placeholder='Nombre y Apellidos' required/>

            <input type="email" placeholder='Ej: placeholder@mail.com' required/>
            
            <textarea name="message"  rows="10" required></textarea>
            <button type='submit' className='btn btn-primary'>Contactar</button>
          
        </form>
      </div>
    </section>


  )
}

export default Contact