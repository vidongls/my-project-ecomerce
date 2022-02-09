import React from 'react'
import { Link } from 'react-router-dom'
import { FaShoppingCart } from 'react-icons/fa'

function HomeTopSeller(props) {
  return (
    <div className="seller">
      <div className="seller-header">
        <div className="seller-header__title">
          <h2>Top Sellers</h2>
          <p>Browse the huge variety of our products</p>
        </div>
        <div className="seller-header__btn">
          <Link to="/shop" className="btn">
            Collection
          </Link>
        </div>
      </div>
      <div className="seller-list">
        <div className="seller-left">
          <div className="seller-left__item">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/ecomerces-7cb8c.appspot.com/o/banner1.jpg?alt=media&token=a8d68426-757c-4b1e-8e29-7aa3101dc9b7"
              alt=""
            />
            <div style={{ textAlign: 'center' }}>
              <div className="text-content text-left">
                <h2>
                  <Link to="/shop">Minimal Home Decor</Link>
                </h2>
                <div className="sell-price">
                  <span>$207.00 USD</span>
                  <span className="old-price">$230.00 USD</span>
                </div>
                <div className="seller-btn">
                  <Link className="btn" to="/shop">
                    Shop Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="seller-right">
          <div className="seller-right__item">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/ecomerces-7cb8c.appspot.com/o/banner2.jpg?alt=media&token=7c833520-b92e-497d-88d9-1a7d47000726"
              alt=""
            />
            <div className="text-content text-right">
              <h2>
                <Link to="/shop">Xcross Comoer Furniture</Link>
              </h2>
              <div className="sell-price">
                <span>$207.00 USD</span>
                <span className="old-price">$230.00 USD</span>
              </div>
              <div className="seller-btn" style={{ display: 'flex' }}>
                <Link className="btn btn-viewdetail" to="/shop">
                  view details
                </Link>
                <div className="seller-shop">
                  <Link to="/shop" style={{ display: 'flex' }}>
                    <FaShoppingCart />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeTopSeller
