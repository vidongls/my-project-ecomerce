import { React, useState } from 'react'
import Tab from '@mui/material/Tab'
import TabList from '@material-ui/lab/TabList'
import TabPanel from '@material-ui/lab/TabPanel'
import TabContext from '@material-ui/lab/TabContext'
import Rating from '@mui/material/Rating'
import DetailForm from './DetailForm'

function DetailDesPrev(props) {
  const [value, setValue] = useState('1')

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }
  return (
    <div className="detail-despre">
      <div className="detail-despre__left">
        <TabContext value={value}>
          <TabList className="tablist" onChange={handleChange}>
            <Tab label="Description" value="1" />
            <Tab label="Reviews" value="2" />
          </TabList>

          <TabPanel value="1">
            <div className="detail-despre__description">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo.
              </p>
              <p>
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut fugit, sed quia consequuntur magni dolores eos qui ratione
                voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
                ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia
                non numquam eius modi tempora incidunt ut labore et dolore
                magnam aliquam quaerat voluptatem.
              </p>
            </div>
          </TabPanel>
          <TabPanel value="2">
            <div className="detail-despre__review">
              <div className="detail-comment">
                <div className="detail-comment__list">
                  <div className="detail-comment__img">
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/ecomerces-7cb8c.appspot.com/o/author01.png?alt=media&token=ab1a0ac9-8c26-43ea-b75d-839bc9a0e450"
                      alt=""
                    />
                  </div>
                  <div className="detail-comment__text">
                    <h4>
                      Roger West <span>- June 5, 2018</span>
                    </h4>
                    <div className="detail-comment__rating">
                      <Rating name="read-only" value={5} readOnly />
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud
                      exercitation.
                    </p>
                  </div>
                </div>
                <div className="detail-comment__list">
                  <div className="detail-comment__img">
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/ecomerces-7cb8c.appspot.com/o/author02.png?alt=media&token=7fe6829d-11a1-48c5-a3d8-74279f58e7cd"
                      alt=""
                    />
                  </div>
                  <div className="detail-comment__text">
                    <h4>
                      Roger West <span>- June 5, 2018</span>
                    </h4>
                    <div className="detail-comment__rating">
                      <Rating name="read-only" value={5} readOnly />
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud
                      exercitation.
                    </p>
                  </div>
                </div>
              </div>
              <DetailForm />
            </div>
          </TabPanel>
        </TabContext>
      </div>
      <div className="detail-despre__right">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/ecomerces-7cb8c.appspot.com/o/pro-details.jpg?alt=media&token=57af7bde-3d97-402c-9a57-9fe5ed945c94"
          alt=""
        />
      </div>
    </div>
  )
}

export default DetailDesPrev
