// @flow

import webpack from 'webpack'
import path from 'path'

const WDS_PORT = 3000

export default {
	entry: [
		'react-hot-loader/patch',
		//`webpack-dev-server/client?http://0.0.0.0:${WDS_PORT}`, // WebpackDevServer host and port
    //'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
		'./src/index',
	],
	output: {
		filename: 'js/bundle.js',
		path: path.resolve(__dirname, 'dist'),
		publicPath: `http://localhost:${WDS_PORT}/dist`,
	},
	module: {
		rules: [
			{ test: /\.(js|jsx)$/, use: 'babel-loader', exclude: /node_modules/ },
		]
	},
	resolve: {
		extensions: ['.js', '.jsx'],
	},
	devServer: {
		port: 3000,
		hot: true,
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		//new webpack.optimize.OccurrenceOrderPlugin(),

	],
}