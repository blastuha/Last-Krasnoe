import React from 'react'
import { CartItem } from './CartItem'

function CartList(props) {
  const {
    order,
    handleCartShow,
    removeFromOrder,
    handleMinusCartItem,
    handlePlusCartItem,
  } = props

  const totalPrice = order.reduce((sum, el) => {
    return sum + el.price * el.quantity
  }, 0)

  return (
    <ul className='collection cart-list'>
      <li className='collection-item active'>Корзина</li>
      {order.length ? (
        order.map((item) => (
          <CartItem
            key={item.id}
            {...item}
            removeFromOrder={removeFromOrder}
            handleMinusCartItem={handleMinusCartItem}
            handlePlusCartItem={handlePlusCartItem}
          />
        ))
      ) : (
        <li className='collection-item'>Корзина пуста</li>
      )}
      <li className='collection-item active'>
        Общая стоимость: {totalPrice} руб.
        <button className='btn-small buying'>Оформить</button>
      </li>
      {/* <li className='collection-item'>
        <button className='btn-small'>Оформить</button>
      </li> */}
      <i
        className='material-icons basket-close'
        onClick={handleCartShow}
      >
        close
      </i>
    </ul>
  )
}

export { CartList }
