import { React } from 'react'
import ShopSearch from './ShopSearch'
import ShopBrandFilter from './ShopBrandFilter'
import ShopDragFilter from './ShopDragFilter'
import ShopSizeFilter from './ShopSizeFilter'
import ShopCategoryFilter from './ShopCategoryFilter'
import ShopTagFilter from './ShopTagFilter'
import ShopColorFilter from './ShopColorFilter'
import ShopRecentProduct from './ShopRecentProduct'
import ShopSideAdv from './ShopSideAdv'

function ShopSort(props) {
  return (
    <div className="sidebar">
      <div className="sidebar-box">
        <ShopSearch />
        <ShopBrandFilter />
        <ShopDragFilter />
        <ShopSizeFilter />
        <ShopCategoryFilter />
        <ShopTagFilter />
        <ShopColorFilter />
        <ShopRecentProduct />
        <ShopSideAdv />
      </div>
    </div>
  )
}

export default ShopSort
