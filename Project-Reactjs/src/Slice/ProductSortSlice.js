import { createSlice } from '@reduxjs/toolkit'

export const SortSlice = createSlice({
  name: 'Sort',
  initialState: {
    data: 'All',
    dataTopSeller: 'All',
    brand: [],
    size: [],
    category: [],
    color: [],
    price: { minPrice: 0, maxPrice: 0 },
  },
  reducers: {
    sortData: (state, action) => {
      state.data = action.payload
    },
    sortTopSeller: (state, action) => {
      state.dataTopSeller = action.payload
    },
    sortBrand: (state, action) => {
      state.brand = Object.assign([], action.payload)
      // state.brand = action.payload
      // console.log(state.brand)
    },
    sortSize: (state, action) => {
      state.size = Object.assign([], action.payload)
    },
    sortCategory: (state, action) => {
      state.category = Object.assign([], action.payload)
    },
    sortColor: (state, action) => {
      state.color = Object.assign([], action.payload)
    },
    sortPrice: (state, action) => {
      let data = action.payload
      state.price.minPrice = data.minPrice
      state.price.maxPrice = data.maxPrice
    },
    refreshList: (state, action) => {
      state.brand = []
      state.size = []
      state.category = []
      state.price = { minPrice: 0, maxPrice: 0 }
    },
  },
})

export const {
  sortData,
  sortTopSeller,
  sortBrand,
  sortSize,
  sortCategory,
  sortPrice,
  refreshList,
  sortColor,
} = SortSlice.actions

export default SortSlice.reducer
