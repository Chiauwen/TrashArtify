import React from 'react'

import PropTypes from 'prop-types'

import GalleryCard3 from './GalleryCard3'
import './gallery.css'

const Gallery = (props) => {
  return (
    <div className="gallery-gallery">
      <div className="gallery-gallery1">
        <h1 className="gallery-gallery-heading">
          {props.GalleryHeading}
        </h1>
        <span className="gallery-gallery-sub-heading">
          {props.GallerySubHeading}
        </span>
        <div className="gallery-container">
          <GalleryCard3
            image_src="https://source.unsplash.com/8rwJ94EffhY?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwMjUyNDkxOXw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
            rootClassName="rootClassName"
          ></GalleryCard3>
          <GalleryCard3
            image_src="https://source.unsplash.com/_bKeoqjIumw?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwMjUyNDkxOXw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
            rootClassName="rootClassName1"
          ></GalleryCard3>
          <GalleryCard3
            image_src="https://source.unsplash.com/g7dUm6lRvtQ?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwMjUyNDkxOXw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
            rootClassName="rootClassName3"
          ></GalleryCard3>
          <GalleryCard3
            image_src="https://source.unsplash.com/nWAlCB1tyvc?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwMjUyNDkxOXw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
            rootClassName="rootClassName2"
          ></GalleryCard3>
          <GalleryCard3
            image_src="https://source.unsplash.com/aBZVCZnd2_Q?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwMjUyNDkxOXw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
            rootClassName="rootClassName4"
          ></GalleryCard3>
          <GalleryCard3
            image_src="https://source.unsplash.com/AVBOmVU90Gk?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwMjUyNDkxOXw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
            rootClassName="rootClassName5"
          ></GalleryCard3>
          <GalleryCard3
            image_src="https://source.unsplash.com/dclPEtMVdK8?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwMjUyNDkxOXw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
            rootClassName="rootClassName6"
          ></GalleryCard3>
          <GalleryCard3
            image_src="https://source.unsplash.com/l3e0fCQdq4c?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwMjUyNDkxOXw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
            rootClassName="rootClassName7"
          ></GalleryCard3>
          <GalleryCard3
            image_src="https://source.unsplash.com/eNOlrYUx5ZQ?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwMjUyNDkxOXw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
            rootClassName="rootClassName8"
          ></GalleryCard3>
          <GalleryCard3
            image_src="https://source.unsplash.com/lSGhDJK_XKc?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwMjUyNDkxOXw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
            rootClassName="rootClassName9"
          ></GalleryCard3>
          <GalleryCard3
            image_src="https://source.unsplash.com/jH4ZeNWAlnI?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwMjUyNDkxOXw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
            rootClassName="rootClassName10"
          ></GalleryCard3>
          <GalleryCard3
            image_src="https://source.unsplash.com/TaC4qDOBb0c?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwMjUyNDkxOXw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
            rootClassName="rootClassName11"
          ></GalleryCard3>
        </div>
      </div>
    </div>
  )
}

Gallery.defaultProps = {
  GalleryHeading: 'Community-Contributed Projects',
  GallerySubHeading:
    'Explore the amazing creations made by our talented community',
}

Gallery.propTypes = {
  GalleryHeading: PropTypes.string,
  GallerySubHeading: PropTypes.string,
}

export default Gallery
