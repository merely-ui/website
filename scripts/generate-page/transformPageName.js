module.exports = str => {
	const transformed = str
		.split('-')
		.map(item => item[0].toUpperCase() + item.slice(1))
		.join('')

	return transformed + 'Page'
}
