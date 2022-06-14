import React from 'react'
import ImageSlide from './ImageSlide'
import Details from './Details'
import Price from './ProductDetails/Price'
import Description from './ProductDetails/Description'

function MainPage() {
  return (
    <div className='main'>
        <ImageSlide />
        <Details>
            <Description />
            <Price />
        </Details>
    </div>
  )
}

export default MainPage

