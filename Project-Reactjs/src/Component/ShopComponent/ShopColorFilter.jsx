import { React, useState } from 'react'
import Checkbox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'
import { useDispatch } from 'react-redux'
import { sortColor } from '../../Slice/ProductSortSlice'

function ShopColorFilter(props) {
  let arrColor = []

  const dispatch = useDispatch()

  const handleValue = (e) => {
    if (e.target.checked) {
      arrColor.push(e.target.value)
    }

    if (!e.target.checked) {
      arrColor.splice(arrColor.indexOf(e.target.value), 1)
    }

    const actions = sortColor(arrColor)
    dispatch(actions)
    // console.log(arrColor)
  }
  return (
    <div className="sidebar-color">
      <h3>PRODUCT Color</h3>
      <ul className="sidebar-color__list">
        <FormControlLabel
          className="black"
          value="black"
          control={<Checkbox />}
          onChange={handleValue}
          label="Black"
        />
        <FormControlLabel
          className="green"
          value="green"
          control={<Checkbox />}
          onChange={handleValue}
          label="Green"
        />
        <FormControlLabel
          className="blue"
          value="blue"
          control={<Checkbox />}
          onChange={handleValue}
          label="Blue"
        />
        <FormControlLabel
          className="white"
          value="white"
          control={<Checkbox />}
          onChange={handleValue}
          label="White"
        />
        <FormControlLabel
          className="red"
          value="red"
          control={<Checkbox />}
          onChange={handleValue}
          label="Red"
        />
        <FormControlLabel
          className="gray"
          value="gray"
          control={<Checkbox />}
          onChange={handleValue}
          label="Gray"
        />
      </ul>
    </div>
  )
}

export default ShopColorFilter
