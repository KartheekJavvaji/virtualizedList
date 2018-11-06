import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import ReduxPromise from 'redux-promise'

import ErrorBoundary from 'atoms/ErrorBoundary'
import App from './app'
import reducers from './reducers'

const store = createStore(reducers, compose(
  applyMiddleware(ReduxPromise),
  window.devToolsExtension ? window.devToolsExtension() : f => f
))

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </Provider>
  , document.getElementById('app'))

if (module && module.hot) {
  module.hot.accept('./reducers', () => {
    const nextRootReducer = require('./reducers/index')
    store.replaceReducer(nextRootReducer)
  })
  module.hot.accept()
  // Enable Webpack hot module replacement for reducers
}
