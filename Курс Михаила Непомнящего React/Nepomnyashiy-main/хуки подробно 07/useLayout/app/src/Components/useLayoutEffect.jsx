import React, { useState, useEffect, useLayoutEffect } from 'react'

function Uselayout() {
  const [value, setValue] = useState(0)

  // useEffect(() => {
  //* 1) onClick = 0 - перерендер, 0 становится - длинным числом - перерендер. По итогу - 2 перерендера
  //   if (value === 0) {
  //     setValue((prevState) => prevState + 1)
  //     // setValue(10 + Math.random() * 200)
  //   }
  // }, [value])

  useLayoutEffect(() => {
    //* useLayout - дает произойти всем перендерам и только после обновляет DOM-дерево (отоборажает результат на странице). То есть рендер происходит дважды, но визуально мы видим 1 рендер. (Убирает прыжки, которые могли бы смутить пользотеля). 99% остальных случаев - useEffect, он быстрее.
    if (value === 0) {
      // setValue((prevState) => prevState + 1)
      setValue(10 + Math.random() * 200)
    }
  }, [value])

  console.log('render', value)

  return (
    <div>
      <button onClick={() => setValue(0)}>value = {value}</button>
    </div>
  )
}

export default Uselayout
