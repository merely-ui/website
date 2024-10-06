'use client'

import { Accordion } from '@/src/shared/ui/accordion/Accordion'
import { Flex, Grid, Text } from '@merely-ui/react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ReactNode } from 'react'
import { pageLinks } from '../model/page-links'

export default function DocsPage({ children }: { children: ReactNode }) {
	const pathname = usePathname()

	return (
		<Grid
			justifyContent='space-between'
			gridTemplateColumns={'204px 610px 265px'}
			px={20}
			mt={20}
		>
			<Flex justifySelf='end' flexDir='column' gap={15}>
				{pageLinks.slice(0, 1).map(pageLink => (
					<Link key={pageLink.link} href={pageLink.link}>
						<Text
							color={pathname === pageLink.link ? '#0051FF' : ''}
							fontWeight={500}
							transition='color 0.1s linear'
							_hover={{
								color: '#0051FF',
							}}
						>
							{pageLink.text}
						</Text>
					</Link>
				))}
				<Accordion
					label='Theme'
					content={
						<>
							{pageLinks.slice(1, 4).map(pageLink => (
								<Link key={pageLink.link} href={pageLink.link}>
									<Text
										color={pathname === pageLink.link ? '#0051FF' : ''}
										fontWeight={500}
										transition='color 0.1s linear'
										_hover={{
											color: '#0051FF',
										}}
										_size='s'
									>
										{pageLink.text}
									</Text>
								</Link>
							))}
						</>
					}
				/>
				{pageLinks.slice(4).map(pageLink => (
					<Link key={pageLink.link} href={pageLink.link}>
						<Text
							color={pathname === pageLink.link ? '#0051FF' : ''}
							fontWeight={500}
							transition='color 0.1s linear'
							_hover={{
								color: '#0051FF',
							}}
						>
							{pageLink.text}
						</Text>
					</Link>
				))}
			</Flex>
			<Flex flexDir='column'>{children}</Flex>
			<Flex flexDir='column'>
				<Text fontWeight={500}>On this page</Text>
			</Flex>
		</Grid>
	)
}
