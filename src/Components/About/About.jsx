import '../../Styles/About.css'
import React from 'react'
import me from '../../assets/image3.jpg'
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
              <small>2+ años</small>
            </article>

            <article className='about__card'>
              <GoBook className='about__icon'/>
              <h5>Estudios</h5>
              <small>Escuela de teatro en Madrid</small>
            </article>

            <article className='about__card'>
              <BsStars className='about__icon'/>
              <h5>Apariciones</h5>
              <small>10+ obras teatrales y series televisivas</small>
            </article>
          </div>

          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. In suscipit est veniam molestias doloribus blanditiis ipsam mollitia? Iste expedita suscipit, unde autem veritatis voluptas quibusdam fuga dignissimos, non quas soluta.</p>

          {/* <a href="#contact" className='btn btn-primary'> Contacto</a> */}
        </div>
      </div>
    </section>
  )
}

export default About