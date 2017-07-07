// @flow

import 'babel-polyfill'

import $ from 'jquery'
import Tether from 'tether'
import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { Provider } from 'react-redux'
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'

import App from './app'
import {
	helloReducer,
	featureFlagReducer,
} from './reducers'
import {
	loadFeatureFlags
} from './actions'

window.jQuery = $
window.Tether = Tether
require('bootstrap')

const APP_CONTAINER_SELECTOR = '#js-react-app'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const reducers = combineReducers({
	hello: helloReducer,
	FF: featureFlagReducer,
})

const store = createStore(
	reducers,
	composeEnhancers(applyMiddleware(thunkMiddleware))
)

const rootEl = document.querySelector(APP_CONTAINER_SELECTOR)

const wrapApp = (AppComponent, reduxStore) =>
	<Provider store={reduxStore}>
		<AppContainer>
			<AppComponent />
		</AppContainer>
	</Provider>

ReactDOM.render(wrapApp(App, store), rootEl)

if (module.hot) {
  module.hot.accept('./app', () => {
    const NextApp = require('./app').default
    ReactDOM.render(wrapApp(NextApp), rootEl)
  })
}