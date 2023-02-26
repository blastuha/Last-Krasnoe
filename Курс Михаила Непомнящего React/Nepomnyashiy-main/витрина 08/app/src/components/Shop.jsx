import React, { useState, useEffect } from 'react'
import { API_URL, API_KEY } from '../config'
import { Preloader } from './Preloader'
import { GoodsList } from './GoodsList'
import { Cart } from './Cart'
import { CartList } from './CartList'
import { CartAler } from './CartAler'

function Shop() {
  const [goods, setGoods] = useState([])
  const [loading, setLoading] = useState(true)
  const [order, setOrder] = useState([])
  const [isCartShow, setIsCartShow] = useState(false)
  const [alertName, setAlertName] = useState('')

  useEffect(function getGoods() {
    // fetch имеет 2 параметра: 1) для ссылки, 2) массив опций (в данном случае для заголовка)
    fetch(API_URL, {
      headers: { Authorization: API_KEY },
    })
      .then((res) => res.json())
      .then((data) => {
        setGoods(data.featured)
        setLoading(false)
      })
      .catch((err) => console.warn(err))
    // .finally(() => console.log(goods))
  }, [])

  const addGoodToOrder = (item) => {
    const itemIndex = order.findIndex((orderItem) => orderItem.id === item.id)

    if (itemIndex < 0) {
      // новый товар для корзины + добавляем quantity
      const newItem = {
        ...item,
        quantity: 1,
      }
      setOrder([...order, newItem])
    } else {
      // если есть элемент в массиве orders, то перебираем массив и меняем quantity нужного элемента
      const newOrder = order.map((orderItem, index) => {
        if (index === itemIndex) {
          return {
            ...orderItem,
            quantity: orderItem.quantity + 1,
          }
        } else {
          return orderItem
        }
      })
      setOrder(newOrder)
    }
    setAlertName(item.name)
  }

  const removeFromOrder = (itemId) => {
    setOrder(order.filter((item) => item.id !== itemId))
  }

  const handleCartShow = () => {
    setIsCartShow(!isCartShow)
  }

  const handleMinusCartItem = (id) => {
    const newOrder = order.map((item) => {
      if (item.id === id) {
        return { ...item, quantity: item.quantity - 1 }
      } else {
        return item
      }
    })
    setOrder(newOrder)
  }

  const handlePlusCartItem = (id) => {
    const newOrder = order.map((item) => {
      if (item.id === id) {
        return { ...item, quantity: item.quantity + 1 }
      } else {
        return item
      }
    })
    setOrder(newOrder)
  }

  const closeAlert = () => {
    setAlertName('')
  }

  return (
    <div>
      <main className='container content'>
        <Cart
          quantity={order.length}
          handleCartShow={handleCartShow}
        />
        {loading ? (
          <Preloader />
        ) : (
          <GoodsList
            goods={goods}
            addGoodToOrder={addGoodToOrder}
          />
        )}
        {isCartShow && (
          <CartList
            order={order}
            handleCartShow={handleCartShow}
            removeFromOrder={removeFromOrder}
            handleMinusCartItem={handleMinusCartItem}
            handlePlusCartItem={handlePlusCartItem}
          />
        )}
      </main>
      {alertName && (
        <CartAler
          name={alertName}
          closeAlert={closeAlert}
        />
      )}
    </div>
  )
}

export { Shop }
