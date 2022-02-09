import { React, useState, useEffect } from 'react'
import ProductApi from '../../Api/ProductApi'
import Tab from '@mui/material/Tab'
import TabList from '@material-ui/lab/TabList'
import TabPanel from '@material-ui/lab/TabPanel'
import TabContext from '@material-ui/lab/TabContext'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import DetailAction from './DetailAction'
import DetailDesPrev from './DetailDesPrev'

function Details(props) {
  const [products, setProducts] = useState([])
  const [value, setValue] = useState('1')

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  let { productID } = useParams()

  useEffect(() => {
    const getProducts = async () => {
      const productItems = await ProductApi.getOne(productID)
      let data = productItems.data
      setProducts(data)
    }
    getProducts()

    return () => {
      setProducts([])
    }
  }, [])

  return (
    <div className="detail">
      <div className="container">
        <div className="detail-box">
          <div className="detail-image">
            {products.images ? (
              <TabContext value={value}>
                <div className="detail-image__main">
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
                <div className="detail-image__child">
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
          <div className="detail-content">
            <div className="detail-category">
              <Link to="/shop">Decor</Link>,
              <Link to="/shop">{products.brand}</Link>
            </div>
            <h2>{products.name}</h2>
            <div className="detail-price">
              <span>${products.mainPrice}.00 USD</span>
            </div>
            <div className="detail-des">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip.
              </p>
            </div>
            <div className="detail-info">
              <ul>
                <li>
                  <span>Brands: </span>
                  {products.brand}
                </li>
                <li>
                  <span>Product Code: </span>
                  f1
                </li>
                <li>
                  <span>Reward Points: </span>
                  100
                </li>
                <li>
                  <span>Stock: </span>
                  <span className="stock">
                    {products.stock ? 'In Stock' : 'Out Stock'}
                  </span>
                </li>
              </ul>
            </div>
            <DetailAction product={products} />
          </div>
        </div>
        <DetailDesPrev />
      </div>
    </div>
  )
}

export default Details
