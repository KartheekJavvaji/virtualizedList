import React from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'

const Feature = ({
  title,
  desc,
  type: {
    className,
    text
  }
}) => (
  <div className="feature">
    <h1 className="font-weight-bold title">
      {title}
      <span className={cx('badge', className)}>
        {text}
      </span>
    </h1>
    <p className="description">{desc}</p>
  </div>
)

Feature.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  type: PropTypes.shape({
    className: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
  })
}

export const FEATURE_TYPES = {
  UX: {
    className: 'badge-warning',
    text: 'UX'
  },
  PERFORMANCE: {
    className: 'badge-info',
    text: 'Performance'
  }
}

export default Feature
