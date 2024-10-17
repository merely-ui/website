import { SearchBar } from '@/src/features/search-docs'
import { ToggleTheme } from '@/src/features/toggle-theme'
import Container from '@/src/shared/ui/Container'
import { Box, Button, Flex } from '@merely-ui/react'
import Link from 'next/link'
import Logo from './Logo'

export default function Header() {
	return (
		<Box
			position='fixed'
			top={0}
			left={0}
			right={0}
			zIndex={1000}
			backdropFilter='blur(5px)'
			_dark={{
				bgColor: 'rgba(0, 0, 0, 0.5)',
			}}
			_light={{
				bgColor: 'rgba(255, 255, 255, 0.2)',
			}}
		>
			<Container>
				<Flex
					as='header'
					justifyContent='space-between'
					alignItems='center'
					py={20}
				>
					<Link aria-label='MerelyUI Logo' href='/'>
						<Logo />
					</Link>
					<SearchBar />
					<Flex alignItems='center' gap={20}>
						<ToggleTheme />

						<a href='https://boosty.to/blinovvv/donate'>
							<Button _size='s'>Sponsor 💖</Button>
						</a>
					</Flex>
				</Flex>
			</Container>
		</Box>
	)
}
