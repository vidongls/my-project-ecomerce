import { React, useState, useEffect } from 'react'
import {
  FaRegEye,
  FaExchangeAlt,
  FaShoppingCart,
  FaTimes,
} from 'react-icons/fa'
import ProductApi from '../../Api/ProductApi'
import { addToCart, setTotalPrice } from '../../Slice/CartSlice'
import { useDispatch } from 'react-redux'
import { useSnackbar } from 'notistack'
import { addToCompare } from '../../Slice/CompareSlice'
import Modal from '@mui/material/Modal'
import Tab from '@mui/material/Tab'
import TabList from '@material-ui/lab/TabList'
import TabPanel from '@material-ui/lab/TabPanel'
import TabContext from '@material-ui/lab/TabContext'
import DetailAction from '../DetailComponent/DetailAction'

function HomeItemAction(props) {
  const [products, setProducts] = useState([])
  const dispatch = useDispatch()
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState('1')

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }
  const { enqueueSnackbar } = useSnackbar()

  const { id } = props

  useEffect(() => {
    const getProducts = async () => {
      const productItems = await ProductApi.getOne(id)
      let data = productItems.data
      setProducts(data)
    }

    getProducts()

    return () => {
      setProducts([])
    }
  }, [])

  const handleAdd = () => {
    if (products.length !== 0) {
      const itemData = {
        product: products,
        id: id,
        quantity: 1,
      }
      const actionAddToCart = addToCart(itemData)
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
  }
  const handleCompare = () => {
    if (products.length !== 0) {
      const itemData = {
        product: products,
        id: id,
      }

      const actionCompare = addToCompare(itemData)
      dispatch(actionCompare)
      enqueueSnackbar('Add item in Compare.', {
        anchorOrigin: {
          vertical: 'top',
          horizontal: 'left',
        },
        autoHideDuration: 2000,
        variant: 'success',
      })
    }
  }

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }
  return (
    <>
      <div className="product-action">
        <div className="product-action__item" onClick={handleAdd}>
          <FaShoppingCart />
        </div>
        <div onClick={handleOpen} className="product-action__item">
          <FaRegEye />
        </div>
        <Modal open={open} onClose={handleClose} className="modal">
          <div className="modal-wrapper">
            <div className="modal-content">
              <div className="modal-body">
                <div>
                  {products.images ? (
                    <TabContext value={value}>
                      <div className="modal-image">
                        <TabPanel value="1">
                          <img src={products.images[0].src} alt="" />
                        </TabPanel>
                        <TabPanel value="2">
                          <img src={products.images[1].src} alt="" />
                        </TabPanel>
                        <TabPanel value="3">
                          <img src={products.images[2].src} alt="" />
                        </TabPanel>
                      </div>
                      <div className="modal-image">
                        <TabList onChange={handleChange} aria-label="">
                          <Tab
                            label={<img src={products.images[0].src} alt="" />}
                            value="1"
                          />
                          <Tab
                            label={<img src={products.images[1].src} alt="" />}
                            value="2"
                          />
                          <Tab
                            label={<img src={products.images[2].src} alt="" />}
                            value="3"
                          />
                        </TabList>
                      </div>
                    </TabContext>
                  ) : null}
                </div>
                <div>
                  <div className="modal-text">
                    <div className="modal-text__category">
                      <span>decor</span>, <span>{products.brand}</span>
                    </div>
                    <h2 className="modal-text__title">{products.name}</h2>
                    <div className="modal-text__price">
                      <span>${products.mainPrice}.00 USD</span>
                    </div>
                  </div>
                  <div className="modal-action">
                    <div className="modal-action__text">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip.
                      </p>
                    </div>
                    <div className="modal-action__list">
                      <ul>
                        <li>
                          <span>Brands: </span>
                          {products.brand}
                        </li>
                        <li>
                          <span>Product Code: </span>
                          {products.brand}
                        </li>
                        <li>
                          <span>Reward Points: </span>
                          100
                        </li>
                        <li>
                          <span>Stock: </span>
                          <span className="stock">
                            {' '}
                            {products.stock ? 'In Stock' : 'Out Stock'}
                          </span>
                        </li>
                      </ul>
                    </div>
                    <DetailAction product={products} />
                  </div>
                </div>
              </div>
              <div onClick={handleClose} className="close-btn">
                <FaTimes />
              </div>
            </div>
          </div>
        </Modal>
        <div onClick={handleCompare} className="product-action__item">
          <FaExchangeAlt />
        </div>
      </div>
    </>
  )
}

export default HomeItemAction
