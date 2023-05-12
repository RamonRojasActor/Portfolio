import React from 'react'
import { useState } from 'react'
import {images} from '../../Helpers/SliderData.js'
import {BsArrowRight} from 'react-icons/bs'
const Slider = () => {

    const [currentImg, setCurrentImg] = useState(3)
    
  return (
    <>
    {images.map((image) => {
      return (
        <div
          className={index === current ? 'slide active' : 'slide'}
          key={index}
        >
          {index === current && (
            <img src={image} alt='travel image' className='image' />
          )}
        </div>
      );
    })}
    <img src={images[currentImg].img} alt="Sample Text" />
    <div><BsArrowRight /></div>
    <div>aaaa</div>
    </>
  )
}

export default Slider