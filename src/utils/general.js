export const debounce = (func, wait, immediate) => {
  let timeout
  return (...args) => {
    const context = this
    const later = () => {
      timeout = null
      if (!immediate) func.apply(context, args)
    }
    const callNow = immediate && !timeout
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
    if (callNow) func.apply(context, args)
  }
}

export const throttle = (fn, wait) => {
  let inThrottle, lastFn, lastTime
  return function () {
    const context = this

    const args = arguments
    if (!inThrottle) {
      fn.apply(context, args)
      lastTime = Date.now()
      inThrottle = true
    } else {
      clearTimeout(lastFn)
      lastFn = setTimeout(function () {
        if (Date.now() - lastTime >= wait) {
          fn.apply(context, args)
          lastTime = Date.now()
        }
      }, wait - (Date.now() - lastTime))
    }
  }
}
