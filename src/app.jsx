// @flow

import React from 'react'

import HelloButton from './container/hello-button'
import HelloMessage from './container/hello-message'

const App = () =>
	<div>
		<h1>Matt's awesome app</h1>
		<HelloMessage />
		<HelloButton />
	</div>

export default App