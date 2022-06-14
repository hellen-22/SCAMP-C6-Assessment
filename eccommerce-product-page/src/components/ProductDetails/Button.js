import React from 'react'

function Button() {
  return (
    <section className='add-item'>
        <div className='decrement-increment'>
            <button className='decrement'>-</button>
            <div className='count'>0</div>
            <button className='increment'>+</button>
        </div>
        <button className='add-to-cart'>Add to Cart</button>
    </section>
  )
}

export default Button
