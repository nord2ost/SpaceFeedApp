import { takeLatest, all } from 'redux-saga/effects'
import API from '../Services/Api'
import FixtureAPI from '../Services/FixtureApi'
import DebugConfig from '../Config/DebugConfig'

/* ------------- Types ------------- */


import { HomeTypes } from '../Redux/HomeRedux'


/* ------------- Sagas ------------- */


import { getFeed } from './HomeSagas'


/* ------------- API ------------- */

// The API we use is only used from Sagas, so we create it here and pass along
// to the sagas which need it.
const api = DebugConfig.useFixtures ? FixtureAPI : API.create()

/* ------------- Connect Types To Sagas ------------- */

export default function * root () {
  yield all([
    

    // some sagas receive extra parameters in addition to an action
    takeLatest(HomeTypes.FEED_REQUEST, getFeed, api),
    
    
    
    
  ])
}
