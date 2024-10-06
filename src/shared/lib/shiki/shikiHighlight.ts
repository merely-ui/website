import { createHighlighter } from 'shiki'
import { shikiCSSTheme } from './shikiTheme'

export const shikiHighlight = async (code: string) => {
	const highlighter = await createHighlighter({
		langs: ['javascript'],
		themes: [shikiCSSTheme],
	})

	const out = highlighter.codeToHtml(code, {
		lang: 'javascript',
		theme: 'css-variables',
	})

	return out
}
