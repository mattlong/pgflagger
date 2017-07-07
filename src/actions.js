// @flow

import 'isomorphic-fetch'

import { createAction } from 'redux-actions'
import {
  helloEndpointRoute,
  featureFlagsListRoute,
} from './routes'

export const SAY_HELLO = 'SAY_HELLO'
export const sayHello = createAction(SAY_HELLO)

export const SAY_HELLO_ASYNC_REQUEST = 'SAY_HELLO_ASYNC_REQUEST'
export const SAY_HELLO_ASYNC_SUCCESS = 'SAY_HELLO_ASYNC_SUCCESS'
export const SAY_HELLO_ASYNC_FAILURE = 'SAY_HELLO_ASYNC_FAILURE'
export const sayHelloAsyncRequest = createAction(SAY_HELLO_ASYNC_REQUEST)
export const sayHelloAsyncSuccess = createAction(SAY_HELLO_ASYNC_SUCCESS)
export const sayHelloAsyncFailure = createAction(SAY_HELLO_ASYNC_FAILURE)
export const sayHelloAsync = (num: number) => (dispatch: Function) => {
  dispatch(sayHelloAsyncRequest())
  return fetch(helloEndpointRoute(num), { method: 'GET' })
    .then((res) => {
      if (!res.ok) throw Error(res.statusText)
      return res.json()
    })
    .then((data) => {
      if (!data.serverMessage) throw Error('No message received')
      dispatch(sayHelloAsyncSuccess(data.serverMessage))
    })
    .catch(() => {
      dispatch(sayHelloAsyncFailure())
    })
}

export const LOAD_FEATURE_FLAGS_REQUEST = 'LOAD_FEATURE_FLAGS_REQUEST'
export const LOAD_FEATURE_FLAGS_SUCCESS = 'LOAD_FEATURE_FLAGS_SUCCESS'
export const LOAD_FEATURE_FLAGS_FAILURE = 'LOAD_FEATURE_FLAGS_FAILURE'
export const loadFeatureFlagsRequest = createAction(LOAD_FEATURE_FLAGS_REQUEST)
export const loadFeatureFlagsSuccess = createAction(LOAD_FEATURE_FLAGS_SUCCESS)
export const loadFeatureFlagsFailure = createAction(LOAD_FEATURE_FLAGS_FAILURE)
export const loadFeatureFlags = () => (dispatch: Function) => {
  dispatch(loadFeatureFlagsRequest())
  return fetch(featureFlagsListRoute(), { method: 'GET' })
    .then((res) => {
      if (!res.ok) throw Error(res.statusText)
      return res.json()
    })
    .then((data) => {
      if (!data.featureFlags) throw Error('No feature flags received')
      dispatch(loadFeatureFlagsSuccess(data.featureFlags))
    })
    .catch(() => {
      dispatch(loadFeatureFlagsFailure())
    })
}

export const FEATURE_FLAG_SELECTED = 'FEATURE_FLAG_SELECTED'
export const featureFlagSelected = createAction(FEATURE_FLAG_SELECTED)