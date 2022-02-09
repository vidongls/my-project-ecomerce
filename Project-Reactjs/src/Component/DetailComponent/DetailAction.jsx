import { React, useState } from 'react'
import { useSnackbar } from 'notistack'
import Button from '@mui/material/Button'
import { FaHeart, FaHourglass } from 'react-icons/fa'
// import Grow from '@material-ui/core/Grow'
import { useParams } from 'react-router-dom'
import { addToCart, setTotalPrice } from '../../Slice/CartSlice'
import { useDispatch } from 'react-redux'
import { addToWishList } from '../../Slice/WishListSlice'

function DetailAction(props) {
  const [addWish, setAddWish] = useState(false)
  const { enqueueSnackbar } = useSnackbar()
  const [quantity, SetQuantity] = useState(1)
  // const totalPrice = useSelector((state) => state.cart.setTotalPrice)

  const { product } = props
  let { productID } = useParams()

  const dispatch = useDispatch()
  // const cartItems = useSelector((state) => state.cart.cartItems)

  const enque = (message, status) => {
    enqueueSnackbar(message, {
      anchorOrigin: {
        vertical: 'top',
        horizontal: 'left',
      },
      autoHideDuration: 2000,
      variant: status,
      // TransitionComponent: Grow,
    })
  }

  const handleClickWishList = () => {
    if (product.length !== 0) {
      const itemData = {
        product: product,
        id: productID,
        quantity: 1,
      }
      // console.log(itemData)
      const actionWishList = addToWishList(itemData)
      dispatch(actionWishList)
      enque('Successfully add item in wishlist.', 'success')
      setAddWish(!addWish)
    }
  }

  const handleIncrease = () => {
    SetQuantity(quantity + 1)
  }

  const handleDecrease = () => {
    if (quantity > 1) {
      SetQuantity(quantity - 1)
    }
  }
  const handleAddCart = () => {
    // enque('Add item in Cart', 'success')
    if (product !== null) {
      const itemData = {
        product: product,
        id: productID,
        quantity: quantity,
      }
      const actionAddToCart = addToCart(itemData)
      dispatch(actionAddToCart)
      const actionTotalPrice = setTotalPrice()
      dispatch(actionTotalPrice)
      enque('Add item in Cart', 'success')
      // const actionPrice = setTotalPrice()
      // dispatch(actionPrice)
    }
  }
  return (
    <div className="detail-action">
      <div className="detail-action__count">
        <div className="detail-action__quantity">
          <p>{quantity}</p>
          <Button onClick={handleDecrease} color="secondary">
            -
          </Button>
          <Button onClick={handleIncrease} color="secondary">
            +
          </Button>
        </div>
        <div className="detail-action__icon">
          <Button
            className={addWish ? 'wishlish-btn active' : 'wishlish-btn'}
            value="right"
            onClick={handleClickWishList}
            aria-label="right aligned"
            color="secondary"
          >
            <FaHeart />
          </Button>
          <Button color="secondary">
            <FaHourglass />
          </Button>
        </div>
      </div>
      <div className="detail-action__btn">
        <div onClick={handleAddCart} className="btn">
          purchase now
        </div>
      </div>
    </div>
  )
}

export default DetailAction
