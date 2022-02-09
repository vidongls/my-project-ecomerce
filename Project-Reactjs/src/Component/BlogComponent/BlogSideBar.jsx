import React from 'react'
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaGooglePlusG,
  FaVimeoV,
} from 'react-icons/fa'
import { Link } from 'react-router-dom'

function BlogSideBar(props) {
  return (
    <div className="blog-sidebar">
      <div className="side-box about">
        <div className="side-box__title">
          <h3>About Me</h3>
        </div>
        <div className="side-box__content">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/ecomerces-7cb8c.appspot.com/o/author.png?alt=media&token=c8d16404-7ba3-4893-9f37-4112e94b59ab"
            alt=""
          />
          <h4>MD. Salim Rana</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore.
          </p>
          <div className="social-icon">
            <ul>
              <li>
                <FaFacebookF />
              </li>
              <li>
                <FaTwitter />
              </li>
              <li>
                <FaInstagram />
              </li>
              <li>
                <FaGooglePlusG />
              </li>
              <li>
                <FaVimeoV />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="side-box">
        <div className="side-box__title">
          <h3>Popular Feeds</h3>
        </div>
        <ul className="recent-posts">
          <li>
            <Link to="/detail-post/2">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/ecomerces-7cb8c.appspot.com/o/lb2.jpg?alt=media&token=86e2d022-648e-42d4-a17c-6ae7ca2d28c6"
                alt=""
              />
            </Link>
          </li>
          <li className="recent-posts__text">
            <h6>
              <Link to="/detail-post/2">
                Lorem ipsum dolor sit amet, consect
              </Link>
            </h6>
            <p> September 15, 2018 </p>
          </li>
        </ul>
        <ul className="recent-posts">
          <li>
            <Link to="/detail-post/2">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/ecomerces-7cb8c.appspot.com/o/lb2.jpg?alt=media&token=86e2d022-648e-42d4-a17c-6ae7ca2d28c6"
                alt=""
              />
            </Link>
          </li>
          <li className="recent-posts__text">
            <h6>
              <Link to="/detail-post/2">
                Lorem ipsum dolor sit amet, consect
              </Link>
            </h6>
            <p> September 15, 2018 </p>
          </li>
        </ul>
      </div>
      <div className="side-box">
        <div className="side-box__title">
          <h3>Categories</h3>
        </div>{' '}
        <ul className="category">
          <li>
            <Link to="#">
              Lifestyle <span>78</span>
            </Link>
          </li>
          <li>
            <Link to="#">
              Travel <span>42</span>
            </Link>
          </li>
          <li>
            <Link to="#">
              Fashion <span>32</span>
            </Link>
          </li>
          <li>
            <Link to="#">
              Music <span>85</span>
            </Link>
          </li>
          <li>
            <Link to="#">
              Branding <span>05</span>
            </Link>
          </li>
        </ul>
      </div>
      <div className="side-box">
        <div className="side-box__title">
          <h3>Categories</h3>
        </div>
        <ul className="social-profile">
          <li>
            <Link to="#">
              {' '}
              <FaFacebookF />
            </Link>
          </li>
          <li>
            <Link to="#">
              <FaTwitter />
            </Link>
          </li>
          <li>
            <Link to="#">
              <FaInstagram />
            </Link>
          </li>
          <li>
            <Link to="#">
              <FaGooglePlusG />
            </Link>
          </li>
          <li>
            <Link to="#">
              {' '}
              <FaVimeoV />
            </Link>
          </li>
        </ul>
      </div>{' '}
      <div className="side-box">
        <div className="side-box__title">
          <h3>Categories</h3>
        </div>
        <div className="tag">
          <Link to="#">Popular</Link>
          <Link to="#">desgin</Link>
          <Link to="#">usability</Link>
          <Link to="#">develop</Link>
          <Link to="#">consult</Link>
          <Link to="#">icon</Link>
          <Link to="#">HTML</Link>
          <Link to="#">ux</Link>
          <Link to="#">business</Link>
          <Link to="#">kit</Link>
          <Link to="#">keyboard</Link>
          <Link to="#">tech</Link>
        </div>
      </div>
      <div className="banner">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/ecomerces-7cb8c.appspot.com/o/banner.jpg?alt=media&token=a50cae20-20d6-40db-9b8b-775902770d62"
          alt=""
        />
      </div>
    </div>
  )
}

export default BlogSideBar
