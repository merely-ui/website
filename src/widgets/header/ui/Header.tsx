import { SearchBar } from '@/src/features/search-docs'
import { ToggleTheme } from '@/src/features/toggle-theme'
import Container from '@/src/shared/ui/Container'
import { Button, Flex } from '@merely-ui/react'
import Link from 'next/link'
import Logo from './Logo'

export default function Header() {
	return (
		<Container>
			<Flex
				as='header'
				justifyContent='space-between'
				alignItems='center'
				py={25}
			>
				<Link href='/'>
					<Logo />
				</Link>
				<SearchBar />
				<Flex alignItems='center' gap={25}>
					<ToggleTheme />

					<a href='https://boosty.to/blinovvv/donate'>
						<Button>Sponsor 💖</Button>
					</a>
				</Flex>
			</Flex>
		</Container>
	)
}
