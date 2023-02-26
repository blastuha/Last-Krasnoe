import React from 'react'

function GoodsItem(props) {
  const {
    id,
    name,
    description,
    price,
    full_background,
    addGoodToOrder = Function.prototype,
  } = props

  // console.log(props)

  return (
    <div className='card'>
      <div className='card-image'>
        <img
          src={full_background}
          alt='pic'
        />
      </div>
      <div className='card-content'>
        <span className='card-title'>{name}</span>
        <p>{description}</p>
      </div>
      <div className='card-action'>
        <button
          className='btn'
          onClick={() => addGoodToOrder({ id, name, price })}
        >
          Купить
        </button>
        <span
          className='right'
          style={{ fontSize: '1.5rem' }}
        >
          {price} руб.
        </span>
      </div>
    </div>
  )
}

export { GoodsItem }
