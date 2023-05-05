import React from 'react'
import '../../Styles/News.css'
import NewsItem from './NewsItem'
const News = () => {

  return (
    <section id='news'>
      <h2>Noticias Recientes</h2>
      <div className='container news__container'>
        <NewsItem />
        <NewsItem />
        <NewsItem />
        <NewsItem />
        <NewsItem />
      </div>
    </section>
  )
}

export default News