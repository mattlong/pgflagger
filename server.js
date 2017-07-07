// @flow 

import webpack from 'webpack'
import WebpackDevServer from 'webpack-dev-server'
import config from './webpack.config.babel.dev'

const server = new WebpackDevServer(webpack(config), {
	publicPath: config.output.publicPath,
	hot: true,
	historyApiFallback: true
})

server.listen(3000, 'localhost', (err, result) => {
	if (err) {
		return console.log(err)
	}

	console.log('Listening on http://localhost:3000/')
})