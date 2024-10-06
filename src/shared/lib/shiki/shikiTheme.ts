import { createCssVariablesTheme } from 'shiki'

export const shikiCSSTheme = createCssVariablesTheme({
	name: 'css-variables',
	variablePrefix: '--shiki-',
	variableDefaults: {},
	fontStyle: true,
})
