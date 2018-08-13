import { call, put } from 'redux-saga/effects'
import { path } from 'ramda'
import HomeActions from '../Redux/HomeRedux'

export function * getFeed (api, action) {
  const { data } = action
  // make the call to the api
  const response = yield call(api.getFeed)
  
  if (response.ok) {
  
     const feedData = response.data
    // do data conversion here if needed
    yield put(HomeActions.feedSuccess(feedData))
  } else {
    yield put(HomeActions.feedFailure())
  }
}
