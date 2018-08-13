import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  feedRequest: ['data'],
  feedSuccess: ['feedData'],
  feedFailure: null,
  feedChange: ['data']
})

export const HomeTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  feedData: null,
  data: null,
  fetching: null,
  error: null,
  segment: 0
  
})

/* ------------- Selectors ------------- */

export const HomeSelectors = {
  //selectAvatar: state => state.github.avatar
}

/* ------------- Reducers ------------- */

// request the feed
export const request = (state, { data }) => {
 return state.merge({ fetching: true, data, feedData:null})  }

// successful feed lookup
export const success = (state, action) => {
  const { feedData } = action

  return state.merge({ fetching: false, error: null, feedData })
}

// failed to get the feed
export const failure = (state) =>
  state.merge({ fetching: false, error: true, feedData: null })

  // failed to get the avatar
export const changeSegment = (state, {data}) =>
  state.merge({ segment: data })

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.FEED_REQUEST]: request,
  [Types.FEED_SUCCESS]: success,
  [Types.FEED_FAILURE]: failure,
  [Types.FEED_CHANGE]: changeSegment
})
