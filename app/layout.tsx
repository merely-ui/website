import { Providers } from '@/src/app/Providers'
import Container from '@/src/shared/ui/Container'
import { Footer } from '@/src/widgets/footer'
import { Header } from '@/src/widgets/header'
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
	title:
		'Merely UI - Accessible & Lightweight Components Library for React apps',
	description:
		'Merely UI is a simple, accessible and lightweight library for your React apps',
	keywords: [
		'react',
		'ui',
		'uikit',
		'lightweight',
		'react-components',
		'components',
		'accessible',
	],
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body>
				<Providers>
					<Container>
						<Header />
						{children}
						<Footer />
					</Container>
				</Providers>
			</body>
		</html>
	)
}
