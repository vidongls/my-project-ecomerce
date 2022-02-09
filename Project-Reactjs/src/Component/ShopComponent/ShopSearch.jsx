import React from 'react'
import { useForm } from 'react-hook-form'
import { FaSearch } from 'react-icons/fa'
import { searchData } from '../../Slice/ProductSearchSlice'
import { useDispatch } from 'react-redux'
import { refreshList } from '../../Slice/ProductSortSlice'

function ShopSearch(props) {
  const dispatch = useDispatch()

  const { register, handleSubmit } = useForm()
  const onSubmit = (data) => {
    let searchString = data.search
    const action = searchData(searchString)
    dispatch(action)
  }

  const handleRefresh = () => {
    const action = refreshList()
    dispatch(action)
    const actionSearch = searchData('')
    dispatch(actionSearch)
  }
  return (
    <div className="sidebar-search">
      <h3 className="refresh-list">
        Search by <span onClick={handleRefresh}>Refresh All</span>
      </h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input placeholder="Your keyword...." {...register('search')} />
        <button type="submit">
          <FaSearch />
        </button>
      </form>
    </div>
  )
}

export default ShopSearch
