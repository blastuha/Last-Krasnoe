import React from 'react'

function CartItem(props) {
  const {
    id,
    name,
    price,
    quantity,
    removeFromOrder,
    handleMinusCartItem,
    handlePlusCartItem,
  } = props

  return (
    <li className='collection-item'>
      {`${name} x ${quantity} = ${price * quantity} руб.`}
      <span
        href='#!'
        className='secondary-content'
      >
        <span
          className='basket-quantity'
          onClick={() => handlePlusCartItem(id)}
        >
          +
        </span>
        <span
          className='basket-quantity'
          onClick={() => handleMinusCartItem(id)}
        >
          -
        </span>
        <i
          className='material-icons basket-delete'
          onClick={() => removeFromOrder(id)}
        >
          close
        </i>
      </span>
    </li>
  )
}

export { CartItem }
