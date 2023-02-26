import React, { useState, useEffect } from 'react'

function CartAler(props) {
  const { name, closeAlert } = props

  useEffect(() => {
    const timerId = setTimeout(closeAlert, 1300)

    return () => {
      // сработает при завершении useEffect
      clearTimeout(timerId)
    }
  }, [name])

  return (
    <div id='toast-container'>
      <div className='toast'>{name} добавлен в корзину</div>
    </div>
  )
}

export { CartAler }
