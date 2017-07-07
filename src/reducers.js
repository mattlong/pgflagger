// @flow

import Immutable from 'immutable'
import type { fromJS as Immut} from 'immutable'

import {
  FEATURE_FLAG_SELECTED,

	SAY_HELLO,
	SAY_HELLO_ASYNC_REQUEST,
  SAY_HELLO_ASYNC_SUCCESS,
  SAY_HELLO_ASYNC_FAILURE,

  LOAD_FEATURE_FLAGS_REQUEST,
  LOAD_FEATURE_FLAGS_SUCCESS,
  LOAD_FEATURE_FLAGS_FAILURE,
} from './actions'

const initialFFState = Immutable.fromJS({
	isLoadingFlags: false,
	projectFlags: [{ value: 'foo', label: 'foo' }],
	selectedFlag: 'foo',
})

export const featureFlagReducer = (state: Immut = initialFFState, action: { type: string, payload: any }) => {
	switch (action.type) {
		case LOAD_FEATURE_FLAGS_REQUEST:
			return state.set('isLoadingFlags', true)
		case LOAD_FEATURE_FLAGS_SUCCESS:
			const ret = state
				.set('isLoadingFlags', false)
				.set('projectFlags', action.payload)
			return ret
		case LOAD_FEATURE_FLAGS_FAILURE:
			return state.set('isLoadingFlags', false)

		case FEATURE_FLAG_SELECTED:
			console.log(`Selected ${action.payload}`)
			return state.set('selectedFlag', action.payload)

		default:
			return state
	}
}

const initialHelloState = Immutable.fromJS({
	message: 'Initial message',
	messageAsync: 'Initial async message'
})

export const helloReducer = (state: Immut = initialHelloState, action: { type: string, payload: any }) => {
	switch (action.type) {
		case SAY_HELLO:
			return state.set('message', action.payload)
		case SAY_HELLO_ASYNC_REQUEST:
			return state.set('messageAsync', 'Loading...')
		case SAY_HELLO_ASYNC_SUCCESS:
			return state.set('messageAsync', action.payload)
		case SAY_HELLO_ASYNC_FAILURE:
			return state.set('messageAsync', 'No message received!')
		default:
			return state
	}
}