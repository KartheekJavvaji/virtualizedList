import React from 'react'
import PropTypes from 'prop-types'

import Loader from 'atoms/Loader'
import VirtualizedList from 'molecules/VirtualizedList'
import Album from './Album'

import './index.scss'

const parseAlbumList = ({
  title,
  ...rest
}) => ({
  ...rest,
  title: `${title} ${title}`,
  url: `https://picsum.photos/1200/1200/?image=${Math.floor(Math.random() * 200) + 300}` // [300...500]
})

class AlbumList extends React.Component {
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
    )
  }

  render () {
    const { fetching, albumList } = this.props
    if (fetching) return <Loader />

    const parsedAlbumList = albumList.map(parseAlbumList)
    return (
      <React.Fragment>
        <h1 className="display-3" >Virtualized List</h1>
        <VirtualizedList
          isWindowScroll
          heightOfItem={300}
          listItemRenderer={Album}
          listItems={parsedAlbumList}
          maxBufferItemsToRender={5}
        />
        {/* {
          parsedAlbumList.map(album => (<Album key={album.id} {...album} />))
        } */}
      </React.Fragment>
    )
  }
}

export default AlbumList
