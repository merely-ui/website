import { ShikiLang } from './shiki.types'
import { shikiHighlight } from './shikiHighlight'

interface ShikiCodeBlockProps {
	code: string
	lang?: ShikiLang
}

export default async function ShikiCodeBlock({
	code,
	lang = 'javascript',
}: ShikiCodeBlockProps) {
	const out = await shikiHighlight(code, lang)

	return <div className='code' dangerouslySetInnerHTML={{ __html: out }} />
}
