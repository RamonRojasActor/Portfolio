import React from 'react'
import '../../Styles/News.css'
import NewsItem from './NewsItem'
const News = () => {

  return (
    <section id='news'>
      <h2>Noticias Recientes</h2>
      <div className='container news__container'>
        <NewsItem 
          img = "https://i.ytimg.com/vi/xI5qcX-m-P4/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD3mBA26punKvcRtrszZuszip2UdA"
          href = "https://www.youtube.com/watch?v=xI5qcX-m-P4"
          title = "Ramon Rojas Videobook"
          txt = "Aquí os presento mi videobook"
        />
        <NewsItem 
          img="https://cadenaser.com/resizer/e_N7ruvkivRmi9ofoDQuWtG25vQ=/650x366/filters:format(jpg):quality(70)/cloudfront-eu-central-1.images.arcpublishing.com/prisaradio/LD2ZFQJHLNOXDDRPYRJT4WP56Q.jpg"
          href="https://cadenaser.com/emisora/2021/06/10/radio_villena/1623321750_807998.html"
          title = "Entrevista radio cadena ser para la promoción de Como Gustéis"
          txt = "El actor villenense Ramón Rojas, protagoniza una comedia de Shakespeare, que se estrena en Alicante"
        />
        <NewsItem 
          img="https://scontent-mad1-1.xx.fbcdn.net/v/t39.30808-6/318516567_1643709649365704_7271166949383224594_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=973b4a&_nc_ohc=sR00gm1H8n8AX8uDDJ3&_nc_ht=scontent-mad1-1.xx&oh=00_AfDQ8rEgRfVgslcIZ2ZVpo6gWEr9MCHmN47fq3_f_zAVGw&oe=645AC7C3"
          href="https://www.facebook.com/losjuglaresdellute/posts/pfbid0oAd1ZXLXFM6RBAEDLT2ys4b2r11mjwauGzzNBtthac6xymZm9npoGQeHi6smap1Sl"
          title = "Masterclass con Ramón Rojas"
          txt = "Másterclass, con un paisano Ramón Rojas. Sus técnicas y amor a este arte nos ha bañado de dentro hasta fuera. Impresionante y diferente ,de lo poco que conocemos...hasta los huesos."
        />
      </div>
    </section>
  )
}

export default News