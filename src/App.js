import React from 'react'
import { hot } from 'react-hot-loader'
import { AlbumsContainer } from 'containers/Albums'
import './index.scss'

const App = () => (
  <div className="container-fluid">
    <AlbumsContainer />
  </div>
)

export default hot(module)(App)
