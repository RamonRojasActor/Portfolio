import React from 'react'
import { useState } from 'react'
import {images} from '../../Helpers/SliderData.js'

const Slider = () => {

    const [currentImg, setCurrentImg] = useState(0)
  return (
    <img src={images[currentImg].img} alt="Sample Text" />
  )
}

export default Slider