import { React, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Pagination from '../Pagination/Pagination'
import PostApi from '../../Api/PostApi'
import {
  FaRegCalendarCheck,
  FaRegUser,
  FaRegComments,
  FaQuoteLeft,
} from 'react-icons/fa'

function BlogContent(props) {
  const [posts, setPosts] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [postPerPage] = useState(2)

  useEffect(() => {
    const getPosts = async () => {
      const postItems = await PostApi.getAll()
      let data = postItems.data
      setPosts(data)
    }
    getPosts()
  }, [])
  // Get current Post
  const indexOfLastPosts = currentPage * postPerPage
  const indexOfFirstPosts = indexOfLastPosts - postPerPage

  let currentPosts = posts.slice(indexOfFirstPosts, indexOfLastPosts)
  const paginate = (pageNumber) => setCurrentPage(pageNumber)
  return (
    <div className="blog-list">
      {currentPosts &&
        currentPosts.map((item, index) => {
          return (
            <div className="postbox" key={index}>
              <div className="postbox-image">
                <img src={item.img} alt="" />
              </div>
              <div className="postbox-content">
                <div className="postbox-meta">
                  <span>
                    <FaRegCalendarCheck /> {item.date}
                  </span>
                  <span>
                    <FaRegUser /> {item.author.name}
                  </span>
                  <span>
                    <FaRegComments />
                    {item.comments.length} Comments
                  </span>
                </div>
                <h3 className="postbox-title">
                  <Link to={`/detail-post/${item.id}`}>{item.title}</Link>
                </h3>
                <div className="postbox-text">
                  <p>{item.des.div.div[1].p}</p>
                </div>
                <div className="postbox-btn btn">Read more</div>
              </div>
            </div>
          )
        })}
      <div className="postbox-quote">
        <div className="postbox-quote__icon">
          <FaQuoteLeft />
        </div>
        <div className="postbox-quote__text">
          <p>
            Lorem ipsum dolor sit amet, consectetur cing elit, sed do eiusmod
            tempor.
          </p>
          <h4>- Rosalina Pong</h4>
        </div>
      </div>
      <Pagination
        productPerPage={postPerPage}
        totalProduct={posts.length}
        paginate={paginate}
      />
    </div>
  )
}

export default BlogContent
