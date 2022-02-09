import Checkbox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'
import { React, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import ProductApi from '../../Api/ProductApi'
import { sortSize } from '../../Slice/ProductSortSlice'

function ShopSizeFilter(props) {

  const dispatch = useDispatch()
  const [products, setProducts] = useState([])
  let arrSize = []

  useEffect(() => {
    const getProducts = async () => {
      const productItems = await ProductApi.getAll()
      let data = productItems.data
      setProducts(data)
      // console.log(data.filter((val) => val.size))
    }
    getProducts()

    return () => {
      setProducts([])
    }
  }, [])

  let getSize = [
    ...new Set(products.filter((val) => val.size).map((item) => item.size)),
  ]
  // console.log()
  const handleValue = (e) => {
    if (e.target.checked) {
      arrSize.push(e.target.value)
    }

    if (!e.target.checked) {
      arrSize.splice(arrSize.indexOf(e.target.value), 1)
    }
    const actions = sortSize(arrSize)
    dispatch(actions)
    // console.log(arrSize)
  }

  return (
    <div className="sidebar-size">
      <h3>PRODUCT SIZE</h3>
      {getSize &&
        getSize.map((val, index) => {
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

export default ShopSizeFilter
