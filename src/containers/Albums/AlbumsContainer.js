import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { AlbumList } from 'components/Albums'
import { fetchAlbums } from './albums.actions'

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
      <div>
        <AlbumList
          fetching={fetching}
          albumList={albumList}
        />
      </div>
    )
  }
}

const mapStateToProps = ({ AlbumsReducer }) => AlbumsReducer

export default connect(mapStateToProps, {
  fetchAlbums
})(AlbumContainer)
