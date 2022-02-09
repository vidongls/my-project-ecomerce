import { createSlice } from '@reduxjs/toolkit'

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartItems: JSON.parse(localStorage.getItem('cartItems')) || [],
    totalPrice: JSON.parse(localStorage.getItem('totalPrice')) || 0,
  },
  reducers: {
    addToCart(state, action) {
      const newItem = action.payload
      const index = state.cartItems.findIndex((x) => x.id === newItem.id)
      if (index >= 0) {
        state.cartItems[index].quantity += newItem.quantity
      } else {
        state.cartItems.push(newItem)
      }
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
    },
    inCreaseQuantity(state, action) {
      const id = action.payload.id
      const index = state.cartItems.findIndex((x) => x.id === id)
      if (index >= 0) {
        state.cartItems[index].quantity += 1
        localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
      }
    },
    deCreaseQuantity(state, action) {
      const id = action.payload.id
      const index = state.cartItems.findIndex((x) => x.id === id)
      if (index >= 0) {
        state.cartItems[index].quantity -= 1
        localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
      }
    },
    setTotalPrice(state, action) {
      if (state.cartItems.length !== 0) {
        state.totalPrice = state.cartItems.reduce(
          (total, item) => total + item.product.mainPrice * item.quantity,
          0
        )
      } else {
        state.totalPrice = 0
      }
      localStorage.setItem('totalPrice', JSON.stringify(state.totalPrice))
    },
    removeItemCart(state, action) {
      const id = action.payload
      const index = state.cartItems.findIndex((item) => item.id === id)
      state.cartItems.splice(index, 1)
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
    },
  },
})

export const { reducer, actions } = CartSlice
export const {
  addToCart,
  removeItemCart,
  inCreaseQuantity,
  deCreaseQuantity,
  setTotalPrice,
} = actions
export default reducer
