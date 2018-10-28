import React from 'react'
import PropTypes from 'prop-types'

import ProgressiveImage from 'atoms/ProgressiveImage'
import './index.scss'

const Album = ({ title, style, url }) => (
  <div className='album' style={style}>
    <ProgressiveImage
      rounded
      wrapperClassName="shadow-lg"
      className="img-fluid"
      src={url}
    />
    <p className="text-first-letter-uppercase font-italic ml-5 caption">{title}</p>
  </div>
)

Album.propTypes = {
  style: PropTypes.object,
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}

export default Album
