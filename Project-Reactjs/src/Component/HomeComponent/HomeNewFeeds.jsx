import React from 'react'
import { Link } from 'react-router-dom'
import { FaRegCalendarCheck, FaRegUser, FaRegComments } from 'react-icons/fa'

function HomeNewFeeds(props) {
  return (
    <div className="newsfeed">
      <div className="newsfeed-content">
        <div className="newsfeed-header">
          <h2>News Feeds</h2>
          <p>Check it out every updates</p>
        </div>
        <div className="newsfeed-list">
          <div className="newsfeed-item">
            <div className="newsfeed-item__image">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/ecomerces-7cb8c.appspot.com/o/lb1.jpg?alt=media&token=2eb98910-c32c-4fb4-9215-fbce201d7f34"
                alt=""
              />
            </div>
            <div className="newsfeed-item__content">
              <div className="news-meta">
                <span>
                  <FaRegCalendarCheck /> SEPTEMBER 15, 2018{' '}
                </span>
                <span>
                  <FaRegUser /> MD.
                </span>
                <span>
                  <FaRegComments /> Comments
                </span>
              </div>
              <h2>
                <Link to="/blog">
                  Lorem ipsum dolor sit amet, consectetur adipisic eiusmod
                  tempor incididunt ut labore et dolore.
                </Link>
              </h2>
              <p>
                ccaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum. Sed ut perspiciatis unde
                omnis iste natus error sit voluptatem accusantium doloremque
                laudantium, totam rem
              </p>
            </div>
          </div>
          <div className="newsfeed-item">
            <div className="newsfeed-item__image">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/ecomerces-7cb8c.appspot.com/o/lb2.jpg?alt=media&token=86e2d022-648e-42d4-a17c-6ae7ca2d28c6"
                alt=""
              />
            </div>
            <div className="newsfeed-item__content">
              <div className="news-meta">
                <span>
                  <FaRegCalendarCheck /> SEPTEMBER 15, 2018{' '}
                </span>
                <span>
                  <FaRegUser /> MD.
                </span>
                <span>
                  <FaRegComments /> Comments
                </span>
              </div>
              <h2>
                <Link to="/blog">
                  Lorem ipsum dolor sit amet, consectetur adipisic eiusmod
                  tempor incididunt ut labore et dolore.
                </Link>
              </h2>
              <p>
                ccaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum. Sed ut perspiciatis unde
                omnis iste natus error sit voluptatem accusantium doloremque
                laudantium, totam rem
              </p>
            </div>
          </div>
          <div className="newsfeed-item">
            <div className="newsfeed-item__image">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/ecomerces-7cb8c.appspot.com/o/lb3.jpg?alt=media&token=75b1a4ca-386b-4be8-ac95-eb71b908e523"
                alt=""
              />
            </div>
            <div className="newsfeed-item__content">
              <div className="news-meta">
                <span>
                  <FaRegCalendarCheck /> SEPTEMBER 15, 2018{' '}
                </span>
                <span>
                  <FaRegUser /> MD.
                </span>
                <span>
                  <FaRegComments /> Comments
                </span>
              </div>
              <h2>
                <Link to="/blog">
                  Lorem ipsum dolor sit amet, consectetur adipisic eiusmod
                  tempor incididunt ut labore et dolore.
                </Link>
              </h2>
              <p>
                ccaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum. Sed ut perspiciatis unde
                omnis iste natus error sit voluptatem accusantium doloremque
                laudantium, totam rem
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeNewFeeds
