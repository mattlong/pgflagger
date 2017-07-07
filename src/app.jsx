// @flow

import React from 'react'

import HelloButton from './container/hello-button'
import HelloMessage from './container/hello-message'
import HelloButtonAsync from './container/hello-button-async'
import HelloMessageAsync from './container/hello-message-async'
import FeatureFlagSelector from './container/feature-flag-selector'

const App = () =>
	<div className="container mt-4">
		<div className="row">
			<div className="col-12">
				<h1>Page Title Goes here</h1>
				<FeatureFlagSelector />
				<HelloMessage />
				<HelloButton />
				<HelloMessageAsync />
				<HelloButtonAsync />
			</div>
		</div>
	</div>

export default App