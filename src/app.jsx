// @flow

import React from 'react'

import HelloButton from './container/hello-button'
import HelloMessage from './container/hello-message'
import HelloButtonAsync from './container/hello-button-async'
import HelloMessageAsync from './container/hello-message-async'

const App = () =>
	<div className="container mt-4">
		<div className="row">
			<div className="col-12">
				<h1>Page Title Goes here</h1>
				<HelloMessage />
				<HelloButton />
				<HelloMessageAsync />
				<HelloButtonAsync />
			</div>
		</div>
	</div>

export default App