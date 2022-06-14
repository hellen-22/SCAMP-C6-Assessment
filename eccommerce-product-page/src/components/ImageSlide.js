import React, { useState } from 'react'
import LargeImage from './ProductImages/LargeImage'
import Images from './ProductImages/Images'

function ImageSlide() {
    const [currentImage, setCurrentImage] = useState(1)
    const [imgNumber, setImgNumber] = useState(1)
  return (
    <div className='slide-images'>
        <LargeImage hin={setImgNumber} imgNumber={imgNumber} currentImage={currentImage} />
        <Images hin={setImgNumber} handleImgs={setCurrentImage}  />
    </div>
  )
}

export default ImageSlide
