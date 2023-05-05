import React from 'react'



const NewsItem = () => {
    //hacerlo para que el link y la imagen se pasaen como parámetros
  return (
    <article className='news__item'>
        <div className='news__item-image'>
            <img src="https://i.ytimg.com/vi/xI5qcX-m-P4/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD3mBA26punKvcRtrszZuszip2UdA" alt="sample text" />
        </div>
        <h3>Ramon Rojas Videobook</h3>
        <small>
          <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae non illum modi accusantium facere eos itaque! Mollitia libero nemo quibusdam dignissimos, quidem maiores rem quo, veritatis officia iure recusandae veniam.
          </p>
        </small>
        <a className='link' href="https://www.youtube.com/watch?v=xI5qcX-m-P4" target="_blank" rel='noreferrer'>Ver Más</a>
    </article>
  )
}

export default NewsItem