const resolveRoot = require('./resolveRoot')
const fs = require('fs/promises')
const transformPageName = require('./transformPageName')

module.exports = async pageName => {
	const resolvePagePath = (...segments) =>
		resolveRoot('src', 'screens', pageName, ...segments)

	const createPageStructure = async () => {
		try {
			await fs.mkdir(resolveRoot('src', 'screens', pageName))

			await fs.mkdir(resolvePagePath('model'))
			await fs.mkdir(resolvePagePath('ui'))
		} catch (e) {
			console.log('⛔ Can`t create a page!')
		}
	}

	const componentName = transformPageName(pageName)
	const createPublicApi = async () => {
		try {
			await fs.writeFile(
				resolveRoot('src', 'screens', pageName, 'index.ts'),
				`export { default as ${componentName} } from './ui/${componentName}/${componentName}'`
			)
		} catch (err) {
			console.log('⛔ Can`t create a Public API!')
			console.log(err)
		}
	}

	const createUI = async () => {
		try {
			await fs.writeFile(
				resolveRoot('src', 'screens', pageName, 'ui', `${componentName}.tsx`),
				`import { DocsPage, SidebarTitles } from '@/src/widgets/docs-page'

const sidebarTitles: SidebarTitles = [
	{
		text: '',
		idAttr: '',
	},
]

export default function ${componentName}() {
	return (
		<DocsPage sidebarTitles={sidebarTitles}>
			
		</DocsPage>
	)
}
`
			)
		} catch (err) {
			console.log('⛔ Can`t create a UI!')
			console.log(err)
		}
	}

	await createPageStructure()
	await createPublicApi()
	await createUI()
}
