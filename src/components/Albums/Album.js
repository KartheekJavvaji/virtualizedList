import React from 'react'
import PropTypes from 'prop-types'

import ProgressiveImage from 'atoms/ProgressiveImage'
import './index.scss'

const Album = ({ title, style, url }) => (
  <div className='album' style={style}>
    <ProgressiveImage
      rounded
      className="img-fluid"
      src={url}
    />
    <h3 className="figure-caption ml-5">{title}</h3>
  </div>
)

Album.propTypes = {
  style: PropTypes.object,
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}

export default Album
