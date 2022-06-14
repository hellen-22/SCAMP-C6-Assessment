import React from 'react'

function LargeImage() {
  return (
    <>
        <div className='large-image' id='large-img' style={{ backgroundImage: `url(${require("./../../images/image-product-1.jpg")})`}}>
        </div>
        <button type='button' className='previous' style={{ backgroundImage: `url(${require("./../../images/icon-previous.svg")})`}}></button>
        <button type='button' className='previous' style={{ backgroundImage: `url(${require("./../../images/icon-next.svg")})`}}></button>
    </>
  )
}

export default LargeImage
