import { React, useState } from 'react'
import Tab from '@mui/material/Tab'
import TabList from '@material-ui/lab/TabList'
import TabContext from '@material-ui/lab/TabContext'
import { FaThList, FaListUl } from 'react-icons/fa'
import ShopListItem from './ShopListItem'
import ShopSort from './ShopSort'

function ShopContainer(props) {
  const [value, setValue] = useState('0')

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <div className="shop">
      <div className="container">
        <div className="shop-content">
          <div className="shop-banner">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/ecomerces-7cb8c.appspot.com/o/shop-banner%20(1).jpg?alt=media&token=afcf2b0a-612f-4964-ae53-55f7236bb7eb"
              alt=""
            />
          </div>
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
                <Tab
                  className="shop-tab__item"
                  label={<FaListUl />}
                  value="1"
                />
                <Tab
                  className="shop-tab__item"
                  label={<FaThList />}
                  value="0"
                />
              </TabList>
            </div>
            <ShopListItem />
          </TabContext>
        </div>
        <ShopSort />
      </div>
    </div>
  )
}

export default ShopContainer
