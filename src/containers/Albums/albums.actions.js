import axios from 'axios'
// import mockData from './mockData'
export const FETCH_ALBUMS = 'albums/FETCH_ALBUMS'

// const mockAPIResponse = Promise.resolve(mockData)
// const delayedPromise = (promise, delay) => new Promise((resolve) => setTimeout(() => resolve(promise), delay))

export const fetchAlbums = () => {
  return {
    type: FETCH_ALBUMS,
    payload: axios.get('https://jsonplaceholder.typicode.com/photos')
  }
}
