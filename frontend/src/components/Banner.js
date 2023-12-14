import React from 'react'

import PropTypes from 'prop-types'

import './banner.css'

const Banner = (props) => {
  return (
    <div className="banner-banner">
      <div className="banner-banner1">
        <h1 className="banner-banner-heading heading2">
          {props.BannerHeading}
        </h1>
        <span className="banner-banner-sub-heading">
          {props.BannerSubHeading}
        </span>
        <button className="banner-banner-button button">
          {props.BannerButton}
        </button>
      </div>
    </div>
  )
}

Banner.defaultProps = {
  BannerHeading: 'Discover the Power of Sustainable Creativity',
  BannerSubHeading:
    'Scan recyclables, get personalized craft ideas, and join a vibrant community',
  BannerButton: 'Learn More',
}

Banner.propTypes = {
  BannerHeading: PropTypes.string,
  BannerSubHeading: PropTypes.string,
  BannerButton: PropTypes.string,
}

export default Banner
