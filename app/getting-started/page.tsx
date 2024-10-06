import { GettingStartedPage } from '@/src/screens/getting-started'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Getting started | Merely UI',
}

export default function GettingStarted() {
	return <GettingStartedPage />
}
