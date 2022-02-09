import React from 'react'
import { FaStar } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function ShopRecentProduct(props) {
  return (
    <div className="sidebar-recent">
      <h3>Recent Product</h3>
      <ul className="sidebar-product">
        <li>
          <div className="sidebar-product__image">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/ecomerces-7cb8c.appspot.com/o/pro2.jpg?alt=media&token=120f7812-a1df-408f-a849-c163ff768be8"
              alt=""
            />
          </div>
          <div className="sidebar-product__content">
            <div className="sidebar-product__rating">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <h5>
              <Link to="/shop">Minimal Troma Furniture</Link>
            </h5>
            <div className="sidebar-product__price">
              <span>$190.00 USD</span>
            </div>
          </div>
        </li>
        <li>
          <div className="sidebar-product__image">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/ecomerces-7cb8c.appspot.com/o/pro6.jpg?alt=media&token=fd4885b2-931f-4cc0-8186-fd0ae62ba465"
              alt=""
            />
          </div>
          <div className="sidebar-product__content">
            <div className="sidebar-product__rating">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <h5>
              <Link to="/shop">Minimal Troma Furniture</Link>
            </h5>
            <div className="sidebar-product__price">
              <span>$90.00 USD</span>
            </div>
          </div>
        </li>
        <li>
          <div className="sidebar-product__image">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/ecomerces-7cb8c.appspot.com/o/pro2.jpg?alt=media&token=120f7812-a1df-408f-a849-c163ff768be8"
              alt=""
            />
          </div>
          <div className="sidebar-product__content">
            <div className="sidebar-product__rating">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <h5>
              <Link to="/shop">Minimal Troma Furniture</Link>
            </h5>
            <div className="sidebar-product__price">
              <span>$190.00 USD</span>
            </div>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default ShopRecentProduct
