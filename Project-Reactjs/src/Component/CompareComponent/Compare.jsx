import React from 'react'
import { FaRegTrashAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { removeItemCompare } from '../../Slice/CompareSlice'
import { useSnackbar } from 'notistack'

function Compare(props) {
  const compareItems = useSelector((state) => state.compare.compareItems)

  const dispatch = useDispatch()

  const { enqueueSnackbar } = useSnackbar()

  const handleDelete = (id) => {
    const actionDelete = removeItemCompare(id)
    dispatch(actionDelete)
    enqueueSnackbar('Remove item in compare.', {
      anchorOrigin: {
        vertical: 'top',
        horizontal: 'left',
      },
      autoHideDuration: 2000,
      variant: 'error',
    })
  }

  return (
    <div className="table">
      <div className="container">
        {compareItems.length !== 0 ? (
          <div className="table-content">
            <table>
              <thead>
                <tr>
                  <th>Images</th>
                  <th>Product</th>
                  <th>Brand</th>
                  <th>Stock</th>
                  <th>Unit Price</th>
                  <th>Remove</th>
                </tr>
              </thead>
              <tbody>
                {compareItems &&
                  compareItems.map((item, index) => {
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
                          <span style={{ textTransform: 'capitalize' }}>
                            {item.product.brand}
                          </span>
                        </td>
                        <td>
                          <div style={{ color: '#007bff' }}>
                            {item.product.stock ? 'In Stock' : 'Out Of Stock'}
                          </div>
                        </td>
                        <td>
                          <span>${item.product.mainPrice}.00</span>
                        </td>
                        <td>
                          <div
                            className="cart-remove"
                            onClick={() => handleDelete(item.id)}
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

export default Compare
