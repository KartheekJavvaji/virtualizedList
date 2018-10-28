import React from 'react'
import PropTypes from 'prop-types'

import VirtualizedList from 'molecules/VirtualizedList'
import { EMPTY_ARRAY } from 'app.constants'
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

const ContentPlaceholder = () => (
  <div className="content-placeholder">
    <div className="content-placeholder-image" />
    <div className="content-placeholder-description" />
  </div>
)

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

  static defaultProps = {
    albumList: EMPTY_ARRAY
  }

  render () {
    const { fetching, albumList } = this.props

    if (fetching || (albumList.length === 0 && !navigator.onLine)) {
      return (
        <React.Fragment>
          <ContentPlaceholder />
          <ContentPlaceholder />
          <ContentPlaceholder />
          <ContentPlaceholder />
        </React.Fragment>
      )
    }

    const parsedAlbumList = albumList.map(parseAlbumList)
    return (
      <React.Fragment>
        <VirtualizedList
          isWindowScroll
          heightOfItem={300}
          listItemRenderer={Album}
          listItems={parsedAlbumList}
          maxBufferItemsToRender={5}
        />
        {/* {
          If this is been used instead of VirtualizedList, the DOM will be extremely heavy and the browser will be hung
          parsedAlbumList.map(album => (<Album key={album.id} {...album} />))
        } */}
      </React.Fragment>
    )
  }
}

export default AlbumList
