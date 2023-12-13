import React from 'react'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'

const LandingPage = () => {
  return (
    <div>
      <h2>Hello</h2>

      <Link to="/DetectItem">
        <button>Object Detection</button>
      </Link>
      <br/>
      <Link to="/GreenTrade">
        <button>Green Trade</button>
      </Link>
      <br/>
      <Link to="/MarketPlace">
        <button>Market Place</button>
      </Link>
    </div>
  )
}

export default LandingPage
