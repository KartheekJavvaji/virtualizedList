import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import PositionHelper from './PositionHelper'
import { EMPTY_STRING } from 'app.constants'

const ListItemRenderer = ({ item, style }) => (
  <div
    style={style}
    className="react-scrollable-list-item"
  >
    {item.content}
  </div>
)

ListItemRenderer.propTypes = {
  item: PropTypes.object,
  style: PropTypes.object
}

export default class VirtualizedList extends Component {
  static propTypes = {
    listItems: PropTypes.array.isRequired,
    heightOfItem: PropTypes.number,
    maxBufferItemsToRender: PropTypes.number,
    wrapperClassname: PropTypes.string,
    isWindowScroll: PropTypes.bool,
    listItemRenderer: PropTypes.oneOfType([
      PropTypes.node,
      PropTypes.func
    ]).isRequired
  }

  static defaultProps = {
    listItems: [],
    heightOfItem: 30,
    maxBufferItemsToRender: 50,
    wrapperClassname: EMPTY_STRING,
    isWindowScroll: false
  }

  listRef = React.createRef();

  state = { startPosition: 0, endPosition: 0 }

  getWindowRef = () => ({ current: window })

  componentDidMount () {
    const { isWindowScroll, maxBufferItemsToRender, heightOfItem } = this.props
    const elementScrollToBeObserved = isWindowScroll ? this.getWindowRef() : this.listRef
    this.positionHelper = new PositionHelper(maxBufferItemsToRender, isWindowScroll, heightOfItem, elementScrollToBeObserved)

    const targetElement = this.positionHelper.getTargetElement()
    targetElement.addEventListener('scroll', this.updateScrollPosition)

    this.setState({
      startPosition: 0,
      endPosition: maxBufferItemsToRender
    })
  }

  componentWillUnmount () {
    const targetElement = this.positionHelper.getTargetElement()
    targetElement.removeEventListener('scroll', this.updateScrollPosition)
  }

  updateScrollPosition = () => {
    requestAnimationFrame(() => {
      const { listItems } = this.props
      const {
        startPosition,
        endPosition,
        topBufferHeight,
        bottomBufferheight,
        shouldUpdatePositionInState
      } = this.positionHelper.getNewPositionDetails(listItems.length)

      if (shouldUpdatePositionInState) {
        this.setState({ startPosition, endPosition, topBufferHeight, bottomBufferheight })
      }
    })
  }

  render () {
    const { heightOfItem, listItems, wrapperClassname, listItemRenderer } = this.props

    const { startPosition, endPosition, topBufferHeight, bottomBufferheight } = this.state
    const visibleItems = listItems.slice(startPosition, endPosition)
    const ItemRenderer = (typeof listItemRenderer === 'function') ? listItemRenderer : ListItemRenderer

    return (
      <div className={cx('react-scrollable-list', wrapperClassname)} ref={this.listRef}>
        <div
          key="list-spacer-top"
          style={{
            height: `${topBufferHeight}px`
          }}
        />
        {
          visibleItems.map((listItem, index) => (
            <ItemRenderer style={{ height: `${heightOfItem}px` }} key={listItem.id} {...listItem} index={index}/>
          ))
        }
        <div
          key="list-spacer-bottom"
          style={{
            height: `${bottomBufferheight}px`
          }}
        />
      </div>
    )
  }
}
