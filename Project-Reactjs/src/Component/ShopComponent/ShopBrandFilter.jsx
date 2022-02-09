import { React, useEffect, useState } from 'react'
import Checkbox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'
import ProductApi from '../../Api/ProductApi'
import { useDispatch } from 'react-redux'
import { sortBrand } from '../../Slice/ProductSortSlice'

function ShopBrandFilter(props) {
  let arrSort = []
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

  const dispatch = useDispatch()
  let getBrand = [...new Set(products.map((val) => val.brand))]

  const handleValue = (e) => {
    // if (arrSort.indexOf(e.target.value) !== -1) {
    //   arrSort.splice(arrSort.indexOf(e.target.value, 1))
    // } else {
    //   arrSort.push(e.target.value)
    // }
    if (e.target.checked) {
      arrSort.push(e.target.value)
    }

    if (!e.target.checked) {
      arrSort.splice(arrSort.indexOf(e.target.value), 1)
    }

    const actions = sortBrand(arrSort)
    dispatch(actions)
    // console.log(products)
    // console.log(products.filter((product) => arrSort.includes(product.brand)))
  }
  return (
    <div className="sidebar-brandfilter">
      <h3>Brand</h3>

      {getBrand &&
        getBrand.map((val, index) => {
          return (
            <div key={index}>
              <FormControlLabel
                value={val}
                control={<Checkbox />}
                onChange={handleValue}
                label={val}
              />
            </div>
          )
        })}
    </div>
  )
}

export default ShopBrandFilter
