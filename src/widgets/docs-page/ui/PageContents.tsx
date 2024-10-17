'use client'

import { Flex, Text } from '@merely-ui/react'
import Link from 'next/link'
import { useVisibleTitle } from '../lib/hooks/useVisibleTitle'
import { SidebarTitles } from '../model/types/docs-page.types'

interface PageContentsProps {
	sidebarTitles: SidebarTitles
}

export default function PageContents({sidebarTitles}: PageContentsProps) {
	const titleId = useVisibleTitle(sidebarTitles.map(t => t.idAttr))

	return (
		<Flex flexDir='column'>
				<Flex flexDir='column' pos='sticky' top={125} gap={8}>
					<Text fontWeight={500} mb={8}>
						On this page
					</Text>
					{sidebarTitles.map(title => (
						<Link href={`#${title.idAttr}`} key={title.idAttr}>
							<Text
								_size='s'
								fontWeight={500}
								transition='color 0.2s ease'
								color={title.idAttr === titleId ? '#0051FF' : ''}
								_hover={{
									color: '#0051FF',
								}}
							>
								{title.text}
							</Text>
						</Link>
					))}
				</Flex>
			</Flex>
	)
}