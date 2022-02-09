import { React, useEffect, useState } from 'react'
import Grid from '@mui/material/Grid'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'
import { useSelector } from 'react-redux'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import ProductApi from '../../Api/ProductApi'
import HomeItemAction from './HomeItemAction'
import HomeTopSellerAction from './HomeListSellerAction'

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

function HomeListItemSeller(props) {
  const [products, setProducts] = useState([])
  const sort = useSelector((state) => state.sort.dataTopSeller)
  let newArrTop = []
  // console.log(sort)
  const { row, title } = props

  useEffect(() => {
    const getProducts = async () => {
      const productItems = await ProductApi.getAll()
      let data = productItems.data

      switch (sort) {
        case 'All': {
          newArrTop = [...data]
          break
        }
        case 'Furniture': {
          let newFur = data.filter((val) => {
            return val.category.indexOf(sort.toLowerCase()) !== -1
          })
          newArrTop = [...newFur]
          break
        }
        case 'ManCloth': {
          let newMan = data.filter((val) => {
            return (
              val.category.indexOf('gent') !== -1 &&
              val.category.indexOf('clothing') !== -1
            )
          })
          newArrTop = [...newMan]
          break
        }
        case 'Woman Cloth': {
          let newLady = data.filter((val) => {
            return (
              val.category.indexOf('ladies') !== -1 &&
              val.category.indexOf('clothing') !== -1
            )
          })
          newArrTop = [...newLady]
          break
        }
      }
      setProducts(newArrTop)
    }
    getProducts()
  }, [sort])
  // const handleChange = (event, newValue) => {
  //   setValue(newValue)
  //   console.log(newValue)
  // }
  const settings = {
    arrows: true,
    nextArrow: <SlickArrowRight />,
    prevArrow: <SlickArrowLeft />,
    dots: false,
    infinite: true,
    slidesToShow: 4,
    rows: row,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 682,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          rows: 1,
          centerMode: true,
        },
      },
    ],
  }
  return (
    <div className="wrap-proheader">
      <Grid container spacing={0} className="product">
        <Grid className="product-header" item xs={12}>
          <Grid
            className="product-header__title"
            item
            xs={6}
            sx={{
              padding: { xs: '0px 15px', sm: '0px 15px', xl: '0' },
              maxWidth: { xs: '100%', sm: '100%', xl: '50%' },
            }}
          >
            <h2>{title}</h2>
            <p>Browse the huge variety of our products</p>
          </Grid>
          <Grid
            className="product-header__tab"
            item
            xs={6}
            sx={{
              padding: { xs: '0px 15px', sm: '0px 15px', xl: '0' },
              maxWidth: { xs: '100%', sm: '100%', xl: '50%' },
              marginTop: { xs: '20px', md: '0px' },
            }}
          >
            <HomeTopSellerAction />
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Slider {...settings} className="product-list">
            {products &&
              products.map((item, index) => {
                return (
                  <div className="product-item" key={index}>
                    <div className="product-img">
                      <Link to={`/details/${item.id}`}>
                        <img
                          src={item.img1}
                          className="product-img__first"
                          alt=""
                        ></img>
                        <img
                          src={item.img2}
                          className="product-img__secondary"
                          alt=""
                        ></img>
                      </Link>

                      <HomeItemAction id={item.id} />
                      <div className="product-tag">
                        <span className={item.new === true ? 'new' : null}>
                          {item.new === true ? 'new' : null}
                        </span>
                        <span className={item.new === true ? 'sale' : null}>
                          {item.new === true ? 'new' : null}
                        </span>
                      </div>
                    </div>
                    <div className="product-content">
                      <div className="product-category">
                        <Link to={`/details/${item.id}`}>
                          Decor, {item.brand}{' '}
                        </Link>
                      </div>
                      <h4>
                        <Link to={`/details/${item.id}`}>{item.name}</Link>
                      </h4>
                      <div className="product-meta">
                        <span>${item.mainPrice}.00 USD</span>
                        <span className="old-price">
                          {item.price !== undefined
                            ? '$' + item.price + '.00 USD'
                            : null}
                        </span>
                      </div>
                    </div>
                  </div>
                )
              })}
          </Slider>
        </Grid>
      </Grid>
    </div>
  )
}

export default HomeListItemSeller
