import React from 'react'



const NewsItem = () => {
    //hacerlo para que el link y la imagen se pasaen como parámetros
  return (
    <article className='news__item'>
        <div className='news__item-image'>
            <img src="a" alt="sample text" />
        </div>
        <h3>Texto de prueba para noticias</h3>
        <a className='link' href="https://google.com" target="_blank" rel='noreferrer'>Ver Más</a>
    </article>
  )
}

export default NewsItem