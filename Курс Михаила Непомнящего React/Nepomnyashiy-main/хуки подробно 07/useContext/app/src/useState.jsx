import React, { useState, useEffect } from 'react'

function State() {
  // в class Components React склеивал объекты состояния за нас. В ф. компонентах склеивать объект нужно самому. setState({...state, count: state.count + 1})

  const [state, setState] = useState({
    count: 0,
    isCounting: false,
  })

  useEffect(() => {
    console.log(state)
  }, [state])

  const handleCount = () => {
    // setState({ count: state.count + 1 })
    setState({
      ...state,
      count: state.count + 1,
    })
  }

  const handleStatus = () => {
    // setState({ isCounting: !state.isCounting })
    setState({
      ...state,
      isCounting: !state.isCounting,
    })
  }

  return (
    <div>
      <button onClick={handleCount}>click</button>
      <button onClick={handleStatus}>click 2</button>
    </div>
  )
}

export default State
