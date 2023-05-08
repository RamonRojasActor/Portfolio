import React from 'react'

const NewsItem = (props) => {
  return (
    <article className='news__item'>
        <div className='news__item-image'>
            <img src={props.img} alt="sample text" />
        </div>
        <h3>{props.title}</h3>
        <small>
          <p>
            {props.txt}
          </p>
        </small>
        <a className='link' href={props.href} target="_blank" rel='noreferrer'>Ver Más</a>
    </article>
  )
}

export default NewsItem