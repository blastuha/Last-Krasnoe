import React, { useState, useEffect, useContext } from 'react'
import Categories from '../components/Categories'
import PizzaBlock from '../components/PizzaBlock'
import Skeleton from '../components/PizzaBlock/Skeleton'
import Sort from '../components/Sort'
import Pagination from '../components/Pagination/index.jsx'
import { SearchContext } from '../App'
import { useSelector, useDispatch } from 'react-redux'
import { setCategoryId } from '../redux/slices/filterSlice'
import axios from 'axios'

function Home() {
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)
  const { searchValue } = useContext(SearchContext)
  const { categoryId, sort } = useSelector((state) => state.filterSlice)
  const sortType = sort.sortType
  const dispatch = useDispatch()

  useEffect(() => {
    const categoryPicker = categoryId > 0 ? `category=${categoryId}` : ''
    const sortPicker = `&sortBy=${sortType}`
    setIsLoading(true)

    axios
      .get(
        `https://63f4cb2b2213ed989c4aa3d9.mockapi.io/items?page=${currentPage}&limit=4&${categoryPicker}${sortPicker}`
      )
      .then((res) => {
        setItems(res.data)
        setIsLoading(false)
      })

    window.scrollTo(0, 0)
  }, [categoryId, sortType, currentPage])

  const onChangeCategory = (index) => {
    dispatch(setCategoryId(index))
  }

  return (
    <>
      <div className='container'>
        <div className='content__top'>
          <Categories
            categoryId={categoryId}
            onChangeCategory={onChangeCategory}
          />
          <Sort />
        </div>
        <h2 className='content__title'>Все пиццы</h2>
        <div className='content__items'>
          {isLoading
            ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
            : items
                .filter((obj) =>
                  obj.title.toLowerCase().includes(searchValue.toLowerCase())
                )
                .map((obj) => (
                  <PizzaBlock
                    key={obj.id}
                    {...obj}
                  />
                ))}
        </div>
        <Pagination onChangePage={(number) => setCurrentPage(number)} />
      </div>
    </>
  )
}

export default Home
