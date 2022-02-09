import { React, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FaLayerGroup, FaPlus } from 'react-icons/fa'

function HomeComingSoon(props) {
  const [seconds, setSeconds] = useState(12)
  const [minutes, setMinutes] = useState(1)
  const [hours, setHours] = useState(16)
  const [days, setDays] = useState(1)

  function updateTime() {
    if (minutes === 0 && seconds === 0 && hours === 0 && days === 0) {
      //reset
      setSeconds(0)
      setMinutes(5)
      setHours(16)
      setDays(1)
    } else {
      if (seconds === 0) {
        setMinutes((minutes) => minutes - 1)
        if (minutes === 1) {
          setHours((hours) => hours - 1)
          setMinutes(59)
        }
        setSeconds(59)
      } else {
        setSeconds((seconds) => seconds - 1)
      }
    }
  }

  useEffect(() => {
    const token = setTimeout(updateTime, 1000)

    return () => {
      clearTimeout(token)
    }
  })

  return (
    <div className="upcoming">
      <div className="upcoming-mark">
        <div className="marker mark-1">
          <FaPlus />
          <p>Lodge Flush Mount</p>
        </div>
        <div className="marker mark-2">
          <FaPlus />
          <p>Lodge Flush Mount</p>
        </div>
        <div className="marker mark-3">
          <FaPlus />
          <p>Lodge Flush Mount</p>
        </div>
      </div>
      <div className="phan"></div>
      <div className="upcoming-content">
        <div className="upcoming-price">$500.00</div>
        <h2>
          <Link to="/shop">Lodge Flush Mount</Link>
        </h2>
        <ul className="upcoming-info">
          <li>
            <FaLayerGroup />
            <div className="text">
              <h4>Origin From</h4>
              <span>Sweden</span>
            </div>
          </li>
          <li>
            <FaLayerGroup />
            <div className="text">
              <h4>Material</h4>
              <span>Aluminum</span>
            </div>
          </li>
          <li>
            <FaLayerGroup />
            <div className="text">
              <h4>ODesigner</h4>
              <span>Basictheme</span>
            </div>
          </li>
        </ul>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla.
        </p>
        <div className="upcoming-btn">
          <Link to="/shop" className="btn">
            shop now
          </Link>
          <Link to="/shop" className="btn">
            Details
          </Link>
        </div>
        <div className="upcoming-time">
          <span>
            <span className="time-count">{days}</span>
            <p>Days</p>
          </span>
          <span>
            <span className="time-count">{hours}</span>
            <p>Hour</p>
          </span>
          <span>
            <span className="time-count">{minutes}</span>
            <p>Min</p>
          </span>
          <span>
            <span className="time-count">{seconds}</span>
            <p>Sec</p>
          </span>
        </div>
      </div>
    </div>
  )
}

export default HomeComingSoon
