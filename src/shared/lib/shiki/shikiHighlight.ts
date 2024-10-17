import { createHighlighter } from 'shiki'
import { ShikiLang } from './shiki.types'
import { shikiCSSTheme } from './shikiTheme'

export const shikiHighlight = async (code: string, lang: ShikiLang) => {
	const highlighter = await createHighlighter({
		langs: [lang],
		themes: [shikiCSSTheme],
	})

	const out = highlighter.codeToHtml(code, {
		lang: lang as string,
		theme: 'css-variables',
	})

	highlighter.dispose()

	return out
}
