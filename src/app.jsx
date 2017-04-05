// @flow

import React from 'react'

import HelloButton from './container/hello-button'
import HelloMessage from './container/hello-message'
import HelloButtonAsync from './container/hello-button-async'
import HelloMessageAsync from './container/hello-message-async'

const App = () =>
	<div>
		<h1>Matt's awesome app</h1>
		<HelloMessage />
		<HelloButton />
		<HelloMessageAsync />
		<HelloButtonAsync />
	</div>

export default App