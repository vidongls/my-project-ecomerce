import { React, useState, useEffect } from 'react'
import ProductApi from '../../Api/ProductApi'

function ShopTagFilter(props) {


  const [products, setProducts] = useState([])

  useEffect(() => {
    const getProducts = async () => {
      const productItems = await ProductApi.getAll()
      let data = productItems.data
      setProducts(data)
    }
    getProducts()

    return () => {
      setProducts([])
    }
  }, [])

  let getTag = [
    ...new Set(products.map((val) => val.tags.map((item) => item)).flat()),
  ]

  // console.log()
 
  return (
    <div className="sidebar-tag">
      <h3>TagS</h3>
      <ul className="sidebar-tag__list">
        {getTag &&
          getTag.map((val, index) => {
            return <li key={index}>{val}</li>
          })}
      </ul>
    </div>
  )
}

export default ShopTagFilter
