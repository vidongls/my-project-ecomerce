import { React, useState } from 'react'
import { useDispatch } from 'react-redux'
import { sortData } from '../../Slice/ProductSortSlice'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'

function ProductSort(props) {
  const [value, setValue] = useState('All')

  const dispatch = useDispatch()

  const handleChange = (event, newValue) => {
    setValue(newValue)

    const actions = sortData(newValue)
    dispatch(actions)
  }
  return (
    <Tabs
      value={value}
      onChange={handleChange}
      textColor="secondary"
      indicatorColor="secondary"
      TabIndicatorProps={{
        style: {
          backgroundColor: `transparent`,
        },
      }}
      sx={{
        '& .MuiTabs-flexContainer': {
          flexWrap: 'wrap',
          justifyContent: {
            xs: 'flex-start',
            sm: 'flex-start',
            lg: 'flex-end',
          },
        },
        '& button': {
          marginLeft: { xs: '0px', sm: '0px', lg: '20px' },
          marginRight: { xs: '10px', sm: '10px', md: '20px', lg: '0px' },
          fontSize: { xs: '12px', md: '12px', md: '14px' },
          color: '#10111e',
          fontWeight: '500',
          padding: { xs: '12px 16px', sm: '12px 16px', md: '18px 30px' },
          border: '2px solid #ecedff ',
          textTransform: 'uppercase',
          lineHeight: '1',
          letterSpacing: '2px',
          fontFamily: 'Rubik, sans-serif',
          marginBottom: { xs: '10px' },
          '&.Mui-selected': {
            backgroundColor: '#fe4536',
            color: '#fff !important',
            border: ' 2px solid #fe4536',
          },
        },
      }}
    >
      <Tab className="tab-list" value="All" label="All" />
      <Tab className="tab-list" value="Furniture" label="Furniture" />
      <Tab className="tab-list" value="ManCloth" label="Man Cloth" />
      <Tab className="tab-list" value="Woman Cloth" label="Woman Cloth" />
    </Tabs>
  )
}

export default ProductSort
