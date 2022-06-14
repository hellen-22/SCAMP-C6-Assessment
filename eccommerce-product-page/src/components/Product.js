import React from 'react'
import bigImage from "./../images/image-product-1.jpg"
import smallImage1 from "./../images/image-product-1-thumbnail.jpg"
import smallImage2 from "./../images/image-product-2-thumbnail.jpg"
import smallImage3 from "./../images/image-product-3-thumbnail.jpg"
import smallImage4 from "./../images/image-product-4-thumbnail.jpg"
import "./../css/style.css"

function Product() {
  return ( 
    <section className='product'>
        <div className='row'>
          <div className='col'>
            <img alt='' src={bigImage} className="large-img" ></img>
          </div>
        </div>
        <div className=' row'>
          <div className='col-md-3'>
            <img alt='' src={smallImage1}></img>
          </div>
          <div className='col-md-3'>
            <img alt='' src={smallImage2}></img>
          </div>
          <div className='col-md-3'>
            <img alt='' src={smallImage3}></img>
          </div>
          <div className='col-md-3'>
            <img alt='' src={smallImage4}></img>
          </div>
        </div>
      
    </section>
  )
}

export default Product
