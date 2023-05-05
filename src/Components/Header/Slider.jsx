import React from 'react'
import { useState } from 'react'
import {images} from '../../Helpers/SliderData.js'
import {BsArrowRight} from 'react-icons/bs'
const Slider = () => {

    const [currentImg, setCurrentImg] = useState(3)
  
  return (
    <>
    <img src={images[currentImg].img} alt="Sample Text" />
    <div><BsArrowRight /></div>
    <div>aaaa</div>
    </>
  )
}

export default Slider