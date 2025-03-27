module.exports = {
	globDirectory: '.',
	globPatterns: [
		'**/*.{png,jpg,css,js,html,json}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};