// import React, { useState, useEffect } from 'react'
import { Context } from './Contex'
import { CustomContext } from './Contex'
import Books from './Components/Books'

function App() {
  return (
    <Context>
      <Books />
    </Context>
  )
}

export default App
