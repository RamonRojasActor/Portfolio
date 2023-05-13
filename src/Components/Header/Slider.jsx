import React from 'react'
import me from '../../assets/image1.jpg'
import me2 from '../../assets/image2.jpg'
import me3 from '../../assets/image3.jpg'
import me4 from '../../assets/image4.jpg'
import { Image } from '@mantine/core';
import { Carousel } from '@mantine/carousel';

const Slider = () => {

  return (
    <>
      <Carousel slideSize="80%"  height="100%" maw={720} mx="auto" slideGap="sm" controlsOffset="md" loop dragFree withIndicators>
        <Carousel.Slide> <Image src={me} /> </Carousel.Slide>
        <Carousel.Slide> <Image src={me2} /> </Carousel.Slide>
        <Carousel.Slide> <Image src={me3} /> </Carousel.Slide>
        <Carousel.Slide> <Image src={me4} /> </Carousel.Slide>
      </Carousel>
    </>
  )
}

export default Slider