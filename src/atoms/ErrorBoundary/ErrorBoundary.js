import React from 'react'
import PropTypes from 'prop-types'

class ErrorBoundary extends React.Component {
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
    ]).isRequired
  }

  state = { hasError: false }

  static getDerivedStateFromError (error) {
    // Update state so the next render will show the fallback UI.
    // for some reason, this is not getting called :(
    if (error) {
      console.log(error)
    }
    return ({ hasError: true })
  }

  componentDidCatch (error, info) {
    // You can also log the error to an error reporting service
    if (error) {
      this.setState({
        hasError: true
      })
    }
    // logErrorToMyService(error, info)
  }

  render () {
    const { hasError } = this.state
    const { children } = this.props
    if (hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>
    }

    return children
  }
}

export default ErrorBoundary
