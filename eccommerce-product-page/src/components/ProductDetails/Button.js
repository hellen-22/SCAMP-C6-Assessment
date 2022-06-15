import React from 'react'

function Button() {
  return (
    <section>
        <div className='row'>
            <div className='col-md-4 increase-decrease'>
                <button className='element'>-</button> 
                <div className='element'>0</div>
                <button className='element'>+</button>   
            </div>
            <div className='col-md-8'>
                <button className='btn btn-primary'>Add to Cart</button>
            </div>

        </div>
    </section>
  )
}

export default Button
