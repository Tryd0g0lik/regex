// Generated using webpack-cli https://github.com/webpack/webpack-cli
const path = require("path");
const ESLintPlugin = require('eslint-webpack-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const PATH_SRC = path.resolve(__dirname, "./src");
const PATH_DIST = path.resolve(__dirname, "./dist");

// const isProduction = process.env.NODE_ENV;

module.exports = {
	entry: PATH_SRC + "/index.js",
	output: {
		path: PATH_DIST,
	},
	module: {
		rules: [
			{
				test: /\.js$/i,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
				},
			},
			{
				test: /\.html$/i,
				use: { loader: "html-loader" }
			},
			{
				test: /\.css$/,
				use: { loader: 'css-loader' },
			},
			{
				test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
				type: "asset",
			},

		],
	},
	plugins: [
		new ESLintPlugin({
			files: PATH_SRC + "\\js",
		}),
		new HtmlWebpackPlugin({
			template: "index.html",
		}),
		new MiniCssExtractPlugin({
			filename: '[name].css',
			chunkFilename: '[id].css',
		}),

	],
};
