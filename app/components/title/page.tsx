import { TitlePage } from '@/src/screens/title'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Title | Merely UI',
}

export default function Title() {
	return <TitlePage />
}
