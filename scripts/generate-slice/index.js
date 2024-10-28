const generatePage = require('./generatePage')

const pageName = process.argv[2]

if (!pageName) {
	throw new Error(`⛔ Provide a page name!`)
}

generatePage(pageName)
