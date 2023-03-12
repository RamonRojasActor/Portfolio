import React from 'react'
import '../../Styles/News.css'
import NewsItem from './NewsItem'
const News = () => {
  return (
    <section id='news'>
      <h2>Noticias Recientes</h2>
      <NewsItem />
      <NewsItem />
      <NewsItem />
      <NewsItem />
      <NewsItem />
    </section>
  )
}

export default News