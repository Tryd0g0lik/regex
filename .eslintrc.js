module.exports = {
	env: {
		browser: true,
		es6: true,
	},
	extends: 'airbnb-base',
	overrides: [
	],
	parserOptions: {
		ecmaVersion: '2018',
		sourceType: 'module',
	},
	rules: {
		"no-restricted-syntax": [
			"error",
			"LabeledStatement",
			"WithStatement"
		],
		"linebreak-style": 0,
	}

};
