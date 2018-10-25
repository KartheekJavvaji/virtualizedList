import { FETCH_ALBUMS } from './albums.actions'
import { EMPTY_ARRAY } from 'app.constants'

const defaultState = {
  fetching: true,
  albumList: EMPTY_ARRAY
}

export default function (state = defaultState, action) {
  switch (action.type) {
    case FETCH_ALBUMS :
      return {
        fetching: false,
        albumList: action.payload ? action.payload.data : EMPTY_ARRAY
      }
    default:
      return state
  }
}
