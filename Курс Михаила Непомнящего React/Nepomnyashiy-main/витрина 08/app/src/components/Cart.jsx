import React from 'react'

function Cart(props) {
  const { quantity = 0, handleCartShow } = props

  return (
    <div
      className='cart blue darken-4 white-text'
      onClick={handleCartShow}
    >
      <i className='material-icons'>shopping_cart</i>
      {quantity ? <span className='card-quantity'>{quantity}</span> : null}
    </div>
  )
}

export { Cart }
