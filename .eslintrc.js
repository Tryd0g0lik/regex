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
		"no-useless-escape": "error",
		"no-useless-escape": 0,
		"new-cap": 0,
		"no-undef": 0,
		"no-tabs": ["error", { "allowIndentationTabs": true }],
		"indent": 0,
		"no-unused-vars": 0,
		"no-restricted-syntax": [
			"error",
			"LabeledStatement",
			"WithStatement"
		],
		"linebreak-style": 0,
	}

};
