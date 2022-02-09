import { React, useState } from 'react'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { Link } from 'react-router-dom'

function HeaderMenuMoblie(props) {
  const [expanded, setExpanded] = useState(false)

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false)
  }

  return (
    <>
      <div className="menu-mobile__list">
        <ul>
          <li className="alone-li">
            <Link to="/home">home</Link>
          </li>
          <li className="alone-li">
            <Link to="/shop">shop</Link>
            {/* <Accordion
              expanded={expanded === 'panel2'}
              onChange={handleChange('panel2')}
            >
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>
                  <Link className="text-title" to="/shop">
                    Shop
                  </Link>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Accordion
                  expanded={expanded1 === 'panel1'}
                  onChange={handleChangeChild1('panel1')}
                  className="child-ele"
                >
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>Category View</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <ul>
                      <li>
                        <Link to="/shop">Shop 2 Column</Link>
                      </li>
                      <li>
                        <Link to="/products">Shop Filter Style</Link>
                      </li>
                      <li>
                        <Link to="/products">Shop Full</Link>
                      </li>
                      <li>
                        <Link to="/shop">Shop 3 Column</Link>
                      </li>
                      <li>
                        <Link to="/shop">List View</Link>
                      </li>
                    </ul>
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  expanded={expanded1 === 'panel2'}
                  onChange={handleChangeChild1('panel2')}
                  className="child-ele"
                >
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>Category View 2</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <ul>
                      <li>
                        <Link to="/shop">Sidebar Left</Link>
                      </li>
                      <li>
                        <Link to="/shop">Sidebar Right</Link>
                      </li>
                      <li>
                        <Link to="/cart">Shopping Cart</Link>
                      </li>
                      <li>
                        <Link to="/checkout">Checkout</Link>
                      </li>
                      <li>
                        <Link to="/wishlist">My Wishlist</Link>
                      </li>
                    </ul>
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  expanded={expanded1 === 'panel3'}
                  onChange={handleChangeChild1('panel3')}
                  className="child-ele"
                >
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>Product Type</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <ul>
                      <li>
                        <Link to="/shop">Simple Product</Link>
                      </li>
                      <li>
                        <Link to="/shop">Variable Product</Link>
                      </li>
                      <li>
                        <Link to="/shop">Product Upcoming</Link>
                      </li>
                      <li>
                        <Link to="/shop">Thumb Top Product</Link>
                      </li>
                      <li>
                        <Link to="/compare">Compare</Link>
                      </li>
                    </ul>
                  </AccordionDetails>
                </Accordion>
              </AccordionDetails>
            </Accordion> */}
          </li>
          <li className="alone-li">
            <Link to="/products">Products</Link>
          </li>
          <li className="alone-li">
            <Link to="/blog"> blog</Link>
          </li>

          <li>
            <Accordion
              expanded={expanded === 'panel1'}
              onChange={handleChange('panel1')}
              sx={{
                backgroundColor: '  #0c1923',
                borderTop: '1px solid hsla(0, 0%, 100%, 0.5)',
                '& .Mui-expanded': {
                  margin: '5px 0',
                  // marginTop: '10px',
                  minHeight: '0px',
                },
              }}
            >
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>
                  <Link className="text-title" to="/page">
                    page
                  </Link>
                </Typography>
              </AccordionSummary>
              <AccordionDetails
                sx={{
                  backgroundColor: '  #0c1923',
                  margin: '0px',
                  paddingTop: '0px',
                  paddingBottom: '0px',
                }}
              >
                <ul>
                  <li>
                    <Link to="/contact">Contact Us</Link>
                  </li>
                  <li>
                    <Link to="/cart">Shoping Cart</Link>
                  </li>
                  <li>
                    <Link to="/checkout">Checkout</Link>
                  </li>
                  <li>
                    <Link to="/wishlist">Wishlist</Link>
                  </li>
                  <li>
                    <Link to="/compare">Compare</Link>
                  </li>
                </ul>
              </AccordionDetails>
            </Accordion>
          </li>
        </ul>
      </div>
    </>
  )
}

export default HeaderMenuMoblie
