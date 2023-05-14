import '../../Styles/About.css'
import React from 'react'
import me from '../../assets/about_image.jpg'
import {TbAward} from 'react-icons/tb'
import {GoBook} from 'react-icons/go'
import {BsStars} from 'react-icons/bs'

const About = () => {
  return (
    <section id='about'>
      <h5>Algo</h5>
      <h1>Sobre mí</h1>

      <div className="about__container">
        <div className="about__me">
          <img src={me} alt="Sample text" />
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <TbAward className='about__icon'/>
              <h5>Experiencia</h5>
              <small>8+ años en obras teatrales y cinemáticas</small>
            </article>

            <article className='about__card'>
              <GoBook className='about__icon'/>
              <h5>Estudios</h5>
              <small>Laboratorio teatral Willam Layton y Master de arte dramático aplicado por la Universidad de Alicante</small>
            </article>

            <article className='about__card'>
              <BsStars className='about__icon'/>
              <h5>Apariciones</h5>
              <small>No se que poner, asi que en tus sueños bb</small>
            </article>
          </div>
          
          <div className="about__text">
            <p>Hola! Me presento, me llamo Ramón y soy actor.</p>
            <p>Me apasiona todo lo que tenga que ver con el teatro o el cine. Podría decirse que soy un "workaholic".</p>
            <p>Siempre estoy buscando nuevas formas de superarme en proyectos en los que pueda disfrutar del proceso para poder aprender todo lo que pueda y mas!</p>
          </div>
          
        </div>
      </div>
    </section>
  )
}

export default About