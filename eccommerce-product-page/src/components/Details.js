import React from 'react'
import Button from './ProductDetails/Button'

function Details({ children }) {
  return (
    <div className='details'>
        {children}
        <Button />
    </div>
  )
}

export default Details
