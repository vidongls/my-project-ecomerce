import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../media/img/logo.png'

function Footer(props) {
  const { checkimg } = props

  return (
    <div className="footer">
      <div
        style={{
          backgroundImage: checkimg
            ? 'url(https://firebasestorage.googleapis.com/v0/b/ecomerces-7cb8c.appspot.com/o/footer.jpg?alt=media&token=17780486-e252-46b7-b1d5-9a1080b4bb2d)'
            : '',
          width: '100%',
        }}
      >
        <div className="footer-list">
          <div className="footer-container">
            <div className="footer-box">
              <div className="footer-box__logo">
                <img src={logo} alt="" />
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore mag na aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <div className="footer-box__time">
                <div className="time-icon">
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/ecomerces-7cb8c.appspot.com/o/time.png?alt=media&token=c482b109-65ed-48e4-8cb3-b2f40f8e9af3"
                    alt=""
                  />
                </div>
                <div className="time-text">
                  <span>Got Questions ? Call us 24/7!</span>
                  <h2>(0600) 874 548</h2>
                </div>
              </div>
            </div>

            <div className="footer-box">
              <h3>Social Media</h3>
              <ul>
                <li>
                  <Link to="/">Facebook</Link>
                </li>
                <li>
                  <Link to="/">Twitter</Link>
                </li>
                <li>
                  <Link to="/">Behance</Link>
                </li>
                <li>
                  <Link to="/">Dribbble</Link>
                </li>
                <li>
                  <Link to="/">Linkedin</Link>
                </li>
                <li>
                  <Link to="/">Youtube</Link>
                </li>
              </ul>
            </div>
            <div className="footer-box">
              <h3>Social Media</h3>
              <ul>
                <li>
                  <Link to="/">Facebook</Link>
                </li>
                <li>
                  <Link to="/">Twitter</Link>
                </li>
                <li>
                  <Link to="/">Behance</Link>
                </li>
                <li>
                  <Link to="/">Dribbble</Link>
                </li>
                <li>
                  <Link to="/">Linkedin</Link>
                </li>
                <li>
                  <Link to="/">Youtube</Link>
                </li>
              </ul>
            </div>
            <div className="footer-box">
              <h3>Social Media</h3>
              <ul>
                <li>
                  <Link to="/">Facebook</Link>
                </li>
                <li>
                  <Link to="/">Twitter</Link>
                </li>
                <li>
                  <Link to="/">Behance</Link>
                </li>
                <li>
                  <Link to="/">Dribbble</Link>
                </li>
                <li>
                  <Link to="/">Linkedin</Link>
                </li>
                <li>
                  <Link to="/">Youtube</Link>
                </li>
              </ul>
            </div>
            <div className="footer-box">
              <div className="footer-banner">
                {' '}
                <Link to="/">
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/ecomerces-7cb8c.appspot.com/o/add.jpg?alt=media&token=25f6b9dc-bb87-4ff3-9c92-8bcf8c0db0df"
                    alt=""
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-bottom__text">
          <p>
            Copyright © 2021 <Link to="/">BasicTheme</Link>. All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer
