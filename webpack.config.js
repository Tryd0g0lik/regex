// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const PATH_SRC = path.resolve(__dirname, "/src");
const PATH_DIST = path.resolve(__dirname, "/dist");

const isProduction = process.env.NODE_ENV;
//== "production";

// const stylesHandler = isProduction
// 	? MiniCssExtractPlugin.loader
// 	: "style-loader";

const config = {
	entry: "./src/index.js",
	output: {
		path: PATH_SRC,
		filename: index.js,
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "index.html",
		}),
		new MiniCssExtractPlugin({
			filename: '[name].css',
			chunkFilename: '[id].css',
		}),
		анна
		// Add your plugins here
		// Learn more about plugins from https://webpack.js.org/configuration/plugins/
	],
	module: {
		rules: [
			{
				test: /\.js$/i,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
				}
			},
			{
				test: /\.html$/i,
				use: [HtmlWebpackPlugin.loader, "html-loader"]
			}
			{
				test: /\.css$/i,
				use: [MiniCssExtractPlugin, "style-loader"],
			},
			{
				test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
				type: "asset",
			},

			// Add your rules for custom modules here
			// Learn more about loaders from https://webpack.js.org/loaders/
		],
	},
};

module.exports = () => {
	if (isProduction) {
		config.mode = "production";

		config.plugins.push(new MiniCssExtractPlugin());
	} else {
		config.mode = "development";
	}
	return config;
};

