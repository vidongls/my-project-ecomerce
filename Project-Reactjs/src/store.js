import { configureStore } from '@reduxjs/toolkit'
import CartSlice from './Slice/CartSlice'
import CompareSlice from './Slice/CompareSlice'
import LoginSlice from './Slice/LoginSlice'
import SearchSlice from './Slice/ProductSearchSlice'
import SortSlice from './Slice/ProductSortSlice'
import RegisterSlice from './Slice/RegisterSlice'
import WishListSlice from './Slice/WishListSlice'
const rootReducer = {
  sort: SortSlice,
  cart: CartSlice,
  register: RegisterSlice,
  login: LoginSlice,
  search: SearchSlice,
  wishlist: WishListSlice,
  compare: CompareSlice,
}
const store = configureStore({
  reducer: rootReducer,
})

export default store
