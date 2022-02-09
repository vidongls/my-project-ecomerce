import { React, useState, useEffect } from 'react'
import Checkbox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'
import ProductApi from '../../Api/ProductApi'
import { sortCategory } from '../../Slice/ProductSortSlice'
import { useDispatch } from 'react-redux'

function ShopCategoryFilter(props) {
  let arrCategory = []

  const [products, setProducts] = useState([])
  const dispatch = useDispatch()
  useEffect(() => {
    const getProducts = async () => {
      const productItems = await ProductApi.getAll()
      let data = productItems.data
      setProducts(data)
      // console.log(data.map((val) => val.category.map((item) => item)).flat())
    }
    getProducts()

    return () => {
      setProducts([])
    }
  }, [])

  let getCategory = [
    ...new Set(products.map((val) => val.category.map((item) => item)).flat()),
  ]
  // console.log()
  const handleValue = (e) => {
    if (e.target.checked) {
      arrCategory.push(e.target.value)
    }

    if (!e.target.checked) {
      arrCategory.splice(arrCategory.indexOf(e.target.value), 1)
    }
    // console.log(arrCategory)
    const actions = sortCategory(arrCategory)
    dispatch(actions)
  }

  // console.log(arrCategory)

  return (
    <div className="sidebar-category">
      <h3>PRODUCT Category</h3>
      {getCategory &&
        getCategory.map((val, index) => {
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

export default ShopCategoryFilter
