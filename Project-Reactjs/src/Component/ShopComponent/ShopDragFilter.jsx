import React from 'react'
import Slider from '@mui/material/Slider'
import { useDispatch } from 'react-redux'
import { sortPrice } from '../../Slice/ProductSortSlice'

function ShopDragFilter(props) {
  const [value, setValue] = React.useState([0, 200])
  const dispatch = useDispatch()
  const handleChange = (event, newValue) => {
    setValue(newValue)
  }
  const handelGetValue = () => {
    let data = {
      minPrice: value[0],
      maxPrice: value[1],
    }
    const action = sortPrice(data)
    dispatch(action)
  }

  return (
    <div className="sidebar-drag">
      <h3>FILTER SELECTION</h3>
      <Slider
        getAriaLabel={() => 'Temperature range'}
        defaultValue={30}
        onChange={handleChange}
        // valueLabelDisplay="auto"
        value={value}
        min={0}
        max={300}
        className="drag"
        sx={{
          color: '#84b77c',
          '& span': {
            color: '#84b77c',
          },
        }}
      />

      <div className="sidebar-drag__price">
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <span> {`$${value[0]} - $${value[1]}`} </span>
        </div>
        <span onClick={handelGetValue} className="filter">
          Filter
        </span>
      </div>
    </div>
  )
}
export default ShopDragFilter
