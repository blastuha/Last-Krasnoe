import React, { useEffect, useState } from 'react'
import './scss/app.scss'
import Header from './components/Header'
import { Outlet } from 'react-router-dom'

export const SearchContext = React.createContext('')

function App() {
  const [searchValue, setSearchValue] = useState('')
  console.log('searchValueApp', searchValue)

  return (
    <div className='wrapper'>
      <SearchContext.Provider value={{ searchValue, setSearchValue }}>
        <Header />
        <div className='content'>
          <Outlet />
        </div>
      </SearchContext.Provider>
    </div>
  )
}

export default App
