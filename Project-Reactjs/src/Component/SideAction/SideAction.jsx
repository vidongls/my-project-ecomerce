import { React, useEffect, useState } from 'react'
import { FaArrowUp, FaHeart, FaExchangeAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

function SideAction(props) {
  const wishListItems = useSelector((state) => state.wishlist.wishListItems)
  const compareItems = useSelector((state) => state.compare.compareItems)

  let countWishList = wishListItems.length
  let countCompare = compareItems.length
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  const [scroll, setScroll] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 300)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  return (
    <div className="side">
      <div
        className={scroll ? 'side-toTop active' : 'side-toTop '}
        onClick={scrollToTop}
      >
        <FaArrowUp />
      </div>
      <div className="side-topAction">
        <Link to="/wishlist">
          <FaHeart />
          <span>{countWishList}</span>
        </Link>
      </div>
      <div className="side-topAction compare">
        <Link to="/compare">
          <FaExchangeAlt />
          <span>{countCompare}</span>
        </Link>
      </div>
    </div>
  )
}

export default SideAction
