import { shikiHighlight } from './shikiHighlight'

export default async function ShikiCodeBlock({ code }: { code: string }) {
	const out = await shikiHighlight(code)

	return <div className='code' dangerouslySetInnerHTML={{ __html: out }} />
}
