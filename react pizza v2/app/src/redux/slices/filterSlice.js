import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  categoryId: 0,
  sort: {
    name: 'популярности',
    sortProperty: 'rating',
  },
}

const filterSlice = createSlice({
  // хранится логика обработки стейта
  name: 'filterSlice',
  initialState,
  reducers: {
    setCategoryId(state, action) {
      console.log('action setCategoryId', action)
      // в state мы сохраняем то, что придет в action.payload
      state.categoryId = action.payload
    },
    setSort(state, action) {
      state.sort = action.payload
    },
  },
})

export const { setCategoryId, setSort } = filterSlice.actions
export default filterSlice.reducer
