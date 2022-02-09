import { createSlice } from '@reduxjs/toolkit'

export const WishListSlice = createSlice({
  name: 'wishlist',
  initialState: {
    wishListItems: JSON.parse(localStorage.getItem('wishlist')) || [],
  },
  reducers: {
    addToWishList(state, action) {
      const newItem = action.payload
      const index = state.wishListItems.findIndex((x) => x.id === newItem.id)
      if (index >= 0) {
        state.wishListItems[index].quantity += newItem.quantity
      } else {
        state.wishListItems.push(newItem)
      }
      localStorage.setItem('wishlist', JSON.stringify(state.wishListItems))
    },
    removeItemWishList(state, action) {
      const id = action.payload
      const index = state.wishListItems.findIndex((item) => item.id === id)
      state.wishListItems.splice(index, 1)
      localStorage.setItem('wishListItems', JSON.stringify(state.wishListItems))
    },
  },
})

export const { reducer, actions } = WishListSlice
export const { addToWishList, removeItemWishList } = actions
export default reducer
