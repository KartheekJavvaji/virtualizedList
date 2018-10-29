import { FEATURE_TYPES } from './Feature'

export const FEATURE_LIST = [{
  id: '1',
  type: FEATURE_TYPES.PERFORMANCE,
  title: 'Virtualized List',
  desc: 'By rendering only a portion of the list in the DOM, we can maintain a very light-weighted DOM.'
}, {
  id: '2',
  type: FEATURE_TYPES.UX,
  title: 'Progressive Images',
  desc: 'No one likes to view Blank/Broken images. We can show a placeholder image till the image is loaded and replace it once we get the original image to be shown. And when the network call fails, we show fallback image.'
}, {
  id: '3',
  type: FEATURE_TYPES.PERFORMANCE,
  title: 'Services workers',
  desc: 'Using Workbox, which is a library written over service workers, we can cache assets and js files along with API calls.'
}, {
  id: '4',
  type: FEATURE_TYPES.PERFORMANCE,
  title: 'Code splitting',
  desc: 'By splitting up the main.js and node_modules, we can skip downloading the node_modules again, whenever the main.js changes. This gets applied even to the node_modules, i.e. if any one of the node_modules gets updated, the entire vendor chunk has to be downloaded again. This can be avoided if we split the node_modules. This will reduce the network usage of the user significantly by time.'
}]
