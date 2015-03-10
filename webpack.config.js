module.exports = {
	entry: './index.jsx',
	output: {
		path: __dirname,
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{ test: /\.jsx$/, loader: 'raw!jsx-loader' },
		  { test: /\.js$/, loader: 'babel?loose[]=all' }
		]
	}
};
