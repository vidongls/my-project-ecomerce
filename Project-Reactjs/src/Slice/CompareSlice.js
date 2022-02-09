import { createSlice } from '@reduxjs/toolkit'

export const CompareSlice = createSlice({
  name: 'compare',
  initialState: {
    compareItems: JSON.parse(localStorage.getItem('compare')) || [],
  },
  reducers: {
    addToCompare(state, action) {
      const newItem = action.payload
      const index = state.compareItems.findIndex((x) => x.id === newItem.id)
      if (index >= 0) {
        state.compareItems[index].quantity += newItem.quantity
      } else {
        state.compareItems.push(newItem)
      }
      localStorage.setItem('compare', JSON.stringify(state.compareItems))
    },
    removeItemCompare(state, action) {
      const id = action.payload
      const index = state.compareItems.findIndex((item) => item.id === id)
      state.compareItems.splice(index, 1)
      localStorage.setItem('compareItems', JSON.stringify(state.compareItems))
    },
  },
})

export const { reducer, actions } = CompareSlice
export const { addToCompare, removeItemCompare } = actions
export default reducer
