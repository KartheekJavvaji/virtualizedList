import React from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'

import _isFunction from 'lodash/isFunction'
import _noop from 'lodash/noop'
import PLACEHOLDER_IMG from 'assets/solid-grey.png'
import FALLBACK_IMG from 'assets/image-not-found.png'

import './index.scss'

class ProgressiveImage extends React.Component {
  static propTypes = {
    onError: PropTypes.func,
    className: PropTypes.string,
    wrapperClassName: PropTypes.string,
    placeholder: PropTypes.string,
    alt: PropTypes.string,
    fallback: PropTypes.string,
    src: PropTypes.string.isRequired,
    rounded: PropTypes.bool
  };

  static defaultProps = {
    onError: _noop,
    className: '',
    wrapperClassName: '',
    alt: '',
    placeholder: PLACEHOLDER_IMG,
    fallback: FALLBACK_IMG,
    rounded: false
  }

  state = { loading: true };

  componentDidMount () {
    const { placeholder, src } = this.props
    this.initializeImage({ src, placeholder })
  }

  componentDidUpdate (prevProps) {
    const { src, placeholder } = this.props
    const { src: prevSrc } = prevProps
    if (src !== prevSrc) {
      this.initializeImage({ placeholder, src })
    }
  }

  componentWillUnmount () {
    this.initializeImageEvents()
  }

  onLoad = () => {
    this.setState({
      image: this.image.src,
      loading: false
    })
  };

  onError = (event) => {
    const { onError, fallback } = this.props
    this.loadImage(fallback)
    if (_isFunction(onError)) {
      onError(event)
    }
  };

  initializeImageEvents = () => {
    if (this.image) {
      this.image.onload = null
      this.image.onerror = null
    }
  }

  initializeImage = ({ src, placeholder }) => {
    this.setState({
      image: placeholder,
      loading: true
    }, () => {
      this.loadImage(src)
    })
  }

  loadImage = (imageSrc) => {
    this.initializeImageEvents()
    const image = new Image()
    this.image = image
    image.onload = this.onLoad
    image.onerror = this.onError
    image.src = imageSrc
  };

  render () {
    const { image, loading } = this.state
    const {
      className,
      alt,
      rounded,
      wrapperClassName,
      src,
      fallback,
      placeholder,
      ...restProps
    } = this.props

    return (
      <figure {...restProps} className={cx('figure', wrapperClassName, { 'is-loading': loading })}>
        <img className={cx('figure-img progressive-img', className, { rounded })} src={image} alt={alt} />
      </figure>
    )
  }
}

export default ProgressiveImage
