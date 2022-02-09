import React from 'react'
import { FaRegTrashAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { useSnackbar } from 'notistack'
import { removeItemWishList } from '../../Slice/WishListSlice'
import { addToCart, setTotalPrice } from '../../Slice/CartSlice'

function WhishList(props) {
  const wishListItems = useSelector((state) => state.wishlist.wishListItems)

  const dispatch = useDispatch()

  const { enqueueSnackbar } = useSnackbar()

  const handleDelete = (id) => {
    const actionDelete = removeItemWishList(id)
    dispatch(actionDelete)
    enqueueSnackbar('Remove item in wishlist.', {
      anchorOrigin: {
        vertical: 'top',
        horizontal: 'left',
      },
      autoHideDuration: 2000,
      variant: 'error',
    })
  }
  const handleAdd = (id) => {
    let product = wishListItems.filter((item) => item.product.id === id)
    const actionAddToCart = addToCart(product[0])
    dispatch(actionAddToCart)
    const actionTotalPrice = setTotalPrice()
    dispatch(actionTotalPrice)
    enqueueSnackbar('Add item in Cart', {
      anchorOrigin: {
        vertical: 'top',
        horizontal: 'left',
      },
      autoHideDuration: 2000,
      variant: 'success',
    })
  }
  return (
    <div className="table">
      <div className="container">
        {wishListItems.length !== 0 ? (
          <div className="table-content">
            <table>
              <thead>
                <tr>
                  <th>Images</th>
                  <th>Product</th>
                  <th>Unit Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                  <th>Remove</th>
                </tr>
              </thead>
              <tbody>
                {wishListItems &&
                  wishListItems.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>
                          <Link to={`/details/${item.id}`}>
                            <img src={item.product.img1} alt="" />
                          </Link>
                        </td>
                        <td>
                          <Link to={`/details/${item.id}`}>
                            {item.product.name}
                          </Link>
                        </td>
                        <td>
                          <span>${item.product.mainPrice}.00</span>
                        </td>
                        <td>
                          <div
                            className="btn btn-add"
                            onClick={() => {
                              handleAdd(item.product.id)
                            }}
                          >
                            add to cart
                          </div>
                        </td>
                        <td>
                          <span>${item.product.mainPrice}.00</span>
                        </td>
                        <td>
                          <div
                            className="cart-remove"
                            onClick={() => handleDelete(item.product.id)}
                          >
                            <FaRegTrashAlt />
                          </div>
                        </td>
                      </tr>
                    )
                  })}
              </tbody>
            </table>
          </div>
        ) : (
          <h2 className="pro-nof">No Product Found</h2>
        )}
      </div>
    </div>
  )
}

export default WhishList
