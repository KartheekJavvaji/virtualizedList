import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import ErrorBoundary from 'atoms/ErrorBoundary'
import { AlbumList } from 'components/Albums'
import Feature from './Feature'
import { FEATURE_LIST } from './albums.constants'
import { fetchAlbums } from './albums.actions'

import './index.scss'

class AlbumContainer extends React.PureComponent {
  static propTypes = {
    fetching: PropTypes.bool.isRequired,
    albumList: PropTypes.arrayOf(
      PropTypes.shape({
        albumId: PropTypes.number.isRequired,
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        thumbnailUrl: PropTypes.string.isRequired
      })
    ),
    fetchAlbums: PropTypes.func.isRequired
  }

  componentDidMount () {
    const { fetchAlbums } = this.props
    fetchAlbums()
  }

  render () {
    const { fetching, albumList } = this.props
    return (
      <div className="album-container">
        <div className="features-container">
          <div className="features-wrapper">
            <div className="features">
              <h1 className="text-center display-4">FEATURES</h1>
              {FEATURE_LIST.map(({
                id,
                title,
                desc,
                type
              }) => (
                <Feature
                  key={id}
                  type={type}
                  title={title}
                  desc={desc}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="album-list">
          <ErrorBoundary>
            <AlbumList
              fetching={fetching}
              albumList={albumList}
            />
          </ErrorBoundary>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ AlbumsReducer }) => AlbumsReducer

export default connect(mapStateToProps, {
  fetchAlbums
})(AlbumContainer)
