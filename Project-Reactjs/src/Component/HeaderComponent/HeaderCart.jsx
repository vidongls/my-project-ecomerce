import React from 'react'
import { removeItemCart } from '../../Slice/CartSlice'
import { useSelector, useDispatch } from 'react-redux'
import { FaRegTrashAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { setTotalPrice } from '../../Slice/CartSlice'
function HeaderCart(props) {
  const cartItems = useSelector((state) => state.cart.cartItems)
  const totalPrice = useSelector((state) => state.cart.totalPrice)

  const quantity = cartItems.length

  const dispatch = useDispatch()

  const handleDelete = (id) => {
    const actionDelete = removeItemCart(id)
    dispatch(actionDelete)
    const actionTotalPrice = setTotalPrice()
    dispatch(actionTotalPrice)
  }

  return (
    <>
      {' '}
      <span className="cart-count">{quantity ? quantity : '0'}</span>
      <ul className="minicart">
        <div className="minicart-list">
          {cartItems.length !== 0 ? (
            cartItems.map((item, index) => {
              return (
                <li className="cart-item" key={index}>
                  <div className="cart-img">
                    <Link to={`/details/${item.id}`}>
                      <img src={item.product.img1} alt="" />
                    </Link>
                  </div>
                  <div className="cart-content">
                    <h3>
                      <Link to={`/details/${item.id}`}>
                        {item.product.name}
                      </Link>
                    </h3>
                    <div className="cart-price">
                      <span>
                        ${item.product.mainPrice} * {item.quantity}
                      </span>{' '}
                      = <span> ${item.product.mainPrice * item.quantity}</span>
                    </div>
                  </div>
                  <div
                    className="cart-icon"
                    onClick={() => handleDelete(item.id)}
                  >
                    <FaRegTrashAlt />
                  </div>
                </li>
              )
            })
          ) : (
            <h3>Product Not Found</h3>
          )}
        </div>

        <li>
          <div className="minicart-price">
            <span className="minicart-price__left">Total:</span>
            <span className="minicart-price__right">${totalPrice}.00</span>
          </div>
        </li>
        <li>
          <div className="minicart-checkout">
            <Link to="/cart">Shopping Cart</Link>
            <Link to="/checkout">Checkout</Link>
          </div>
        </li>
      </ul>
    </>
  )
}

export default HeaderCart
