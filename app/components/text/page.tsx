import { TextPage } from '@/src/screens/text'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Text | Merely UI',
}

export default function Text() {
	return <TextPage />
}
