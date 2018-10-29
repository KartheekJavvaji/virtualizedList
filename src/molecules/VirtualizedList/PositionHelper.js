class PositionHelper {
  constructor (maxItemsToRender, isWindowScroll, heightOfItem, elementScrollToBeObserved) {
    this.maxItemsToRender = maxItemsToRender
    this.isWindowScroll = isWindowScroll
    this.heightOfItem = heightOfItem
    this.elementScrollToBeObserved = elementScrollToBeObserved
    this.lastScrollPosition = 0
  }

  getTargetElement = () => this.elementScrollToBeObserved.current

  getNewScrollPosition (listRef) {
    if (this.isWindowScroll) {
      // Firefox has screenY instead of screenTop
      const screenTop = listRef.screenTop ? listRef.screenTop : listRef.screenY
      return (window.scrollY - screenTop) / this.heightOfItem
    }
    return listRef.scrollTop / this.heightOfItem
  }

  getListStartEndIndex (listItemsLength) {
    const startPosition = ((this.lastScrollPosition - this.maxItemsToRender) > 0)
      ? this.lastScrollPosition - this.maxItemsToRender
      : 0

    const endPosition = ((this.lastScrollPosition + this.maxItemsToRender) >= listItemsLength)
      ? listItemsLength
      : this.lastScrollPosition + this.maxItemsToRender

    return ({
      startPosition,
      endPosition
    })
  }

  getNewPositionDetails (listItemsLength) {
    const newScrollPosition = this.getNewScrollPosition(this.elementScrollToBeObserved.current)
    const difference = Math.abs(this.lastScrollPosition - newScrollPosition)
    const shouldUpdatePositionInState = (difference >= this.maxItemsToRender / 5)

    if (!shouldUpdatePositionInState) return ({ shouldUpdatePositionInState: false })

    this.lastScrollPosition = newScrollPosition
    const { startPosition, endPosition } = this.getListStartEndIndex(listItemsLength)
    const topBufferHeight = startPosition * this.heightOfItem
    const bottomBufferheight = (listItemsLength * this.heightOfItem) - (endPosition * this.heightOfItem)
    return ({
      startPosition,
      endPosition,
      topBufferHeight,
      bottomBufferheight,
      shouldUpdatePositionInState
    })
  }
}

export default PositionHelper
