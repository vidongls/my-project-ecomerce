import { createSlice } from '@reduxjs/toolkit'

export const SearchSlice = createSlice({
  name: 'Search',
  initialState: {
    data: '',
  },
  reducers: {
    searchData: (state, action) => {
      state.data = action.payload
    },
  },
})

export const { searchData } = SearchSlice.actions

export default SearchSlice.reducer
