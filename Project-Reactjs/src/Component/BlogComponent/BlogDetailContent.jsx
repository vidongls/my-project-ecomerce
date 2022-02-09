import { React, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import PostApi from '../../Api/PostApi'
import {
  FaRegCalendarCheck,
  FaRegUser,
  FaRegComments,
  FaQuoteLeft,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaGooglePlusG,
  FaVimeoV,
  FaReply,
} from 'react-icons/fa'
import BlogCommentForm from './BlogCommentForm'

function BlogDetailContent(props) {
  const [post, setPost] = useState([])
  let { postID } = useParams()
  const [currentPage, setCurrentPage] = useState(Number(postID))

  useEffect(() => {
    const getPost = async () => {
      const postItems = await PostApi.getOne(postID)
      let data = postItems.data
      // console.log(data)
      setPost(data)
    }
    getPost()
  }, [currentPage])

  const handlePrev = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1)
      scrollToTop()
    }
  }
  const handleNext = () => {
    if (currentPage < 10) {
      setCurrentPage(currentPage + 1)
      scrollToTop()
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <>
      {post && (
        <div className="postbox post">
          <div className="postbox-thumb">
            <img src={post.img} alt="" />
          </div>
          <div className="postbox-meta">
            <span>
              <FaRegCalendarCheck /> {post.date}
            </span>
            <span>
              <FaRegUser /> {post.author && post.author.name}
            </span>
            <span>
              <FaRegComments style={{ marginRight: '3px' }} />
              {post.comments && post.comments.length} Comments
            </span>
          </div>
          <h3 className="postbox-title">{post.title}</h3>
          <div className="postbox-text">
            <p style={{ marginBottom: '20px' }}>
              {post.des && post.des.div.p[0]}
            </p>
            <p>{post.des && post.des.div.p[1]}</p>
          </div>
          <div className="postbox-quote">
            <div className="postbox-quote__icon">
              <FaQuoteLeft />
            </div>
            <div className="postbox-quote__text">
              <p>
                Lorem ipsum dolor sit amet, consectetur cing elit, sed do
                eiusmod tempor.
              </p>
              <h4>- Rosalina Pong</h4>
            </div>
          </div>
          <div className="postbox-text">
            <p style={{ marginBottom: '20px' }}>
              {post.des && post.des.div.p[2]}
            </p>
          </div>
          <div className="postbox-thumb">
            <img src={post.des && post.des.div.div[0].img.src} alt="" />
          </div>
          <div className="postbox-inner">
            <h4>{post.des && post.des.div.div[1].h4}</h4>
            <p>{post.des && post.des.div.div[1].p}</p>
          </div>
          <div className="postbox-inner">
            <h4>{post.des && post.des.div.div[2].h4}</h4>
            <p>{post.des && post.des.div.div[2].p}</p>
          </div>
          <div className="postbox-tagshare">
            <div className="postbox-tag">
              <h4>Releted Tags</h4>
              {post.tags &&
                post.tags.map((item, index) => {
                  return (
                    <Link key={index} to="#">
                      {item}
                    </Link>
                  )
                })}
            </div>
            <div className="postbox-share">
              <h4>Share: </h4>
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
          <div className="postbox-pagi">
            <div className="postbox-pagi__left">
              {currentPage !== 0 ? (
                <div>
                  {' '}
                  <span>
                    <Link
                      onClick={handlePrev}
                      to={`/detail-post/${currentPage}`}
                    >
                      Prev Post
                    </Link>
                  </span>
                  <h4>
                    <Link
                      onClick={handlePrev}
                      to={`/detail-post/${currentPage}`}
                    >
                      Lorem ipsum dolor si
                    </Link>
                  </h4>
                </div>
              ) : null}
            </div>
            <div className="postbox-pagi__midle">
              <Link to="#" onClick={scrollToTop}>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/ecomerces-7cb8c.appspot.com/o/filter.png?alt=media&token=eea49a6f-ae3b-4e42-b821-89924de3f157"
                  alt=""
                />
              </Link>
            </div>
            <div className="postbox-pagi__right">
              {currentPage === 9 ? null : (
                <div>
                  {' '}
                  <span>
                    <Link
                      onClick={handleNext}
                      to={`/detail-post/${currentPage}`}
                    >
                      Next Post
                    </Link>
                  </span>
                  <h4>
                    <Link
                      onClick={handleNext}
                      to={`/detail-post/${currentPage}`}
                    >
                      Lorem ipsum dolor si
                    </Link>
                  </h4>
                </div>
              )}
            </div>
          </div>{' '}
          <div className="postbox-author">
            <div className="postbox-author__image">
              <img src={post.author && post.author.img} alt="" />
            </div>
            <div className="postbox-author__text">
              <h3>{post.author && post.author.name}</h3>
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
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequa aute irure dolor.
              </p>
            </div>
          </div>
          <div className="postbox-comment">
            <div className="postbox-comment__title">
              <h2>Comments</h2>
            </div>
            <div className="lastest-comment">
              <ul>
                {post.comments &&
                  post.comments.map((item, index) => {
                    return (
                      <li key={index}>
                        <div className="comment-box">
                          <div className="comment-box__avatar">
                            <img src={item.profilePic} alt="" />
                          </div>
                          <div className="comment-box__text">
                            <div className="name">
                              <h5>{item.author}</h5>
                              <span>{item.date}</span>
                              <a href="#">
                                <FaReply /> Reply
                              </a>
                            </div>
                            <p>{item.text}</p>
                          </div>
                        </div>
                        <ul>
                          {item.replay &&
                            item.replay.map((item, index) => {
                              return (
                                <li className="reply-comment" key={index}>
                                  <div className="comment-box">
                                    <div className="comment-box__avatar">
                                      <img src={item.profilePic} alt="" />
                                    </div>
                                    <div className="comment-box__text">
                                      <div className="name">
                                        <h5>{item.author}</h5>
                                        <span>{item.date}</span>
                                        <a href="#">
                                          <FaReply /> Reply
                                        </a>
                                      </div>
                                      <p>{item.text}</p>
                                    </div>
                                  </div>
                                </li>
                              )
                            })}
                          <li></li>
                        </ul>
                      </li>
                    )
                  })}
              </ul>
            </div>
          </div>
          <BlogCommentForm />
        </div>
      )}
    </>
  )
}

export default BlogDetailContent
