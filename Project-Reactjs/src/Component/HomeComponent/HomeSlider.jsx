import { React } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'
const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
  <button
    {...props}
    className={
      'slick-prev slick-arrow' + (currentSlide === 0 ? ' slick-disabled' : '')
    }
    aria-hidden="true"
    aria-disabled={currentSlide === 0 ? true : false}
    type="button"
  >
    <FaArrowLeft />
  </button>
)
const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
  <button
    {...props}
    className={
      'slick-next slick-arrow' +
      (currentSlide === slideCount - 1 ? ' slick-disabled' : '')
    }
    aria-hidden="true"
    aria-disabled={currentSlide === slideCount - 1 ? true : false}
    type="button"
  >
    <FaArrowRight />
  </button>
)

function HomeSlider(props) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <SlickArrowRight />,
    prevArrow: <SlickArrowLeft />,
    // centerMode: true,
  }

  return (
    <>
      <Slider className="slider" {...settings}>
        <div className="slider-item">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/ecomerces-7cb8c.appspot.com/o/slide1.jpg?alt=media&token=732c8a32-611c-4f2e-bc48-4532e8a7e0cc"
            alt=""
          />
          <div className="shape-title">
            <h2>UX</h2>
          </div>
          <div className="shape-bound">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/ecomerces-7cb8c.appspot.com/o/shape-icon.png?alt=media&token=1e34f1ce-3fa7-48a6-9e82-96b952a309b2"
              alt=""
            />
          </div>
          <div
            style={{
              width: '100%',
              height: '100%',
              top: '0',
              position: 'absolute',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <div className="slider-content">
              <div className="slider-content__left">
                <span>Furniture Collection</span>
                <h2>Synnes Dining Chair Upholstered</h2>
                <div className="slider-btn">
                  <Link to="/shop" className="btn">
                    shop now
                  </Link>
                  <Link to="/shop" className="btn">
                    category
                  </Link>
                </div>
              </div>
              <div className="slider-content__right">
                <div className="img-left">
                  {' '}
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/ecomerces-7cb8c.appspot.com/o/shape1.png?alt=media&token=cb80b591-986f-44fb-8a38-6d130ae899b4"
                    alt=""
                  />
                </div>
                <div className="img-right">
                  {' '}
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/ecomerces-7cb8c.appspot.com/o/shape2.png?alt=media&token=c8ed012b-e289-4734-affa-f2e63ba03736"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="slider-item">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/ecomerces-7cb8c.appspot.com/o/slide1-1.jpg?alt=media&token=86475c5a-b4d4-43ea-99b9-bbd99c666603"
            alt=""
          />
          <div className="shape-title">
            <h2>UX</h2>
          </div>
          <div className="shape-bound">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/ecomerces-7cb8c.appspot.com/o/shape-icon.png?alt=media&token=1e34f1ce-3fa7-48a6-9e82-96b952a309b2"
              alt=""
            />
          </div>
          <div
            style={{
              width: '100%',
              height: '100%',
              top: '0',
              position: 'absolute',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <div className="slider-content">
              <div className="slider-content__left">
                <span>Furniture Collection</span>
                <h2>Synnes Dining Chair Upholstered</h2>
                <div className="slider-btn">
                  <Link to="/shop" className="btn">
                    shop now
                  </Link>
                  <Link to="/shop" className="btn">
                    category
                  </Link>
                </div>
              </div>
              <div className="slider-content__right">
                <div className="img-left">
                  {' '}
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/ecomerces-7cb8c.appspot.com/o/shape1.png?alt=media&token=cb80b591-986f-44fb-8a38-6d130ae899b4"
                    alt=""
                  />
                </div>
                <div className="img-right">
                  {' '}
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/ecomerces-7cb8c.appspot.com/o/shape2.png?alt=media&token=c8ed012b-e289-4734-affa-f2e63ba03736"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </>
  )
}

export default HomeSlider
