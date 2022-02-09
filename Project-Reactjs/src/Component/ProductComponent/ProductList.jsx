import { React, useEffect, useState } from 'react'
import Tab from '@mui/material/Tab'
import TabList from '@material-ui/lab/TabList'
import TabPanel from '@material-ui/lab/TabPanel'
import TabContext from '@material-ui/lab/TabContext'
import { FaThList, FaListUl } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import ProductApi from '../../Api/ProductApi'
import HomeItemAction from '../HomeComponent/HomeItemAction'
import Pagination from '../Pagination/Pagination'

function ProductList(props) {
  const [products, setProducts] = useState([])
  const [, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [productPerPage] = useState(6)
  const [value, setValue] = useState('0')

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  useEffect(() => {
    const getProducts = async () => {
      const productItems = await ProductApi.getAll()
      let data = productItems.data
      setProducts(data)
      setLoading(false)
    }
    getProducts()

    // return () => {
    //   setProducts([])
    // }
  }, [])
  // Get current product
  const indexOfLastProducts = currentPage * productPerPage
  const indexOfFirstProducts = indexOfLastProducts - productPerPage

  let currentProducts = products.slice(
    indexOfFirstProducts,
    indexOfLastProducts
  )

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  return (
    <div className="compro-list">
      <div className="container">
        <TabContext value={value}>
          <div className="shop-midoption">
            <div className="shop-countshow">
              <p>Showing 01–06 of 28 results</p>
            </div>
            <TabList
              className="shop-tab"
              onChange={handleChange}
              TabIndicatorProps={{
                style: {
                  display: 'none',
                },
              }}
            >
              <Tab className="shop-tab__item" label={<FaListUl />} value="1" />
              <Tab className="shop-tab__item" label={<FaThList />} value="0" />
            </TabList>
          </div>

          <TabPanel
            value="0"
            style={{
              padding: '0px',
            }}
          >
            <div className="product-list">
              {currentProducts &&
                currentProducts.map((item, index) => {
                  return (
                    <div
                      className="product-item"
                      key={index}
                      style={{
                        padding: '0px',
                      }}
                    >
                      <Link to={`/details/${item.id}`} className="product-img">
                        <img
                          style={{
                            minHeight: 'unset',
                          }}
                          src={item.img1}
                          className="product-img__first"
                          alt=""
                        ></img>
                        <img
                          style={{
                            minHeight: 'unset',
                          }}
                          src={item.img2}
                          alt=""
                          className="product-img__secondary"
                        ></img>

                        <div className="product-tag">
                          <span className={item.new === true ? 'new' : null}>
                            {item.new === true ? 'new' : null}
                          </span>
                          <span className={item.new === true ? 'sale' : null}>
                            {item.new === true ? 'new' : null}
                          </span>
                        </div>
                      </Link>
                      <HomeItemAction id={item.id} />
                      <div className="product-content">
                        <div className="product-category">
                          <Link to={`/details/${item.id}`}>
                            Decor, {item.brand}{' '}
                          </Link>
                        </div>
                        <h4>
                          <Link to={`/details/${item.id}`}>{item.name}</Link>
                        </h4>
                        <div className="product-meta">
                          <span>${item.mainPrice}.00 USD</span>
                          <span className="old-price">
                            {item.price !== undefined
                              ? '$' + item.price + '.00 USD'
                              : null}
                          </span>
                        </div>
                      </div>
                    </div>
                  )
                })}
            </div>
          </TabPanel>
          <TabPanel
            className="shop-list-fulldetail"
            value="1"
            style={{
              padding: '0px',
            }}
          >
            <div className="product-list">
              {currentProducts &&
                currentProducts.map((item, index) => {
                  return (
                    <div
                      className="product-item"
                      key={index}
                      style={{
                        padding: '0px',
                      }}
                    >
                      <Link to={`/details/${item.id}`} className="product-img">
                        <img
                          src={item.img1}
                          className="product-img__first"
                          alt=""
                        ></img>
                        <img
                          src={item.img2}
                          className="product-img__secondary"
                          alt=""
                        ></img>
                        <div className="product-tag">
                          <span className={item.new === true ? 'new' : null}>
                            {item.new === true ? 'new' : null}
                          </span>
                          <span className={item.new === true ? 'sale' : null}>
                            {item.new === true ? 'new' : null}
                          </span>
                        </div>
                      </Link>
                      <div className="product-content">
                        <div className="product-category">
                          <Link to={`/details/${item.id}`}>
                            Decor, {item.brand}{' '}
                          </Link>
                        </div>
                        <h4>
                          <Link to={`/details/${item.id}`}>{item.name}</Link>
                        </h4>
                        <div className="product-meta">
                          <span>${item.mainPrice}.00 USD</span>
                          <span className="old-price">
                            {item.price !== undefined
                              ? '$' + item.price + '.00 USD'
                              : null}
                          </span>
                        </div>
                        <p>
                          Sed ut perspiciatis unde omnis iste natus error sit
                          voluptatem accusantium doloremque laudantium, totam
                          rem aperiam, eaque ipsa quae ab illo inventore
                          veritatis et quasi architecto beatae vitae dicta sunt
                          explicabo. Nemo enim ipsam voluptatem quia voluptas
                          sit aspernatur aut odit aut fugit, sed quia
                          consequuntur magni dolores eos qui ratione voluptatem
                          sequi nesciunt.
                        </p>
                        <HomeItemAction id={item.id} />
                      </div>
                    </div>
                  )
                })}
            </div>
          </TabPanel>
        </TabContext>

        <Pagination
          productPerPage={productPerPage}
          totalProduct={products.length}
          paginate={paginate}
        />
      </div>
    </div>
  )
}

export default ProductList
