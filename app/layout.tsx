import { Providers } from '@/src/app/Providers'
import Container from '@/src/shared/ui/Container'
import { Header } from '@/src/widgets/header'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

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
			<body className={inter.className}>
				<Providers>
					<Container>
						<Header />
						{children}
					</Container>
				</Providers>
			</body>
		</html>
	)
}
