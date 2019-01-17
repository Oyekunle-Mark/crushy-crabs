const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtracktTextPlugin = require('extract-text-webpack-plugin')
const path = require('path')

module.exports = {
    mode: 'development',
	entry: './index.js',
	output: {
		path: path.resolve(__dirname),
		filename: 'bundle.js',
		sourceMapFilename: 'bundle.map'
	},
	devtool: 'inline-source-map',
	module: {
		rules: [
			{ 
				test: /\.js$/,
				exclude: /node_modules/,
                use: [{
				    loader: 'babel-loader',
                    options: {
				        presets: ['env', 'stage-0', 'react']
				    }
                }],
			},
            {
                test: /\.scss$/,
                use: ExtracktTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader!sass-loader',
                })
            }
		]
	},
	plugins: [new HtmlWebpackPlugin({
			template: './index.html',
            filename: './index.html'
		}),
        new ExtracktTextPlugin('style.css')
	]
}
