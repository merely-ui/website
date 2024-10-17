import { Flex, Grid } from '@merely-ui/react'
import { ReactNode } from 'react'
import { SidebarTitles } from '../model/types/docs-page.types'
import PageContents from './PageContents'
import Sidebar from './Sidebar'

interface DocsPageProps {
	children: ReactNode
	sidebarTitles: SidebarTitles
}

export default function DocsPage({ children, sidebarTitles }: DocsPageProps) {
	return (
		<Grid
			justifyContent='space-between'
			gridTemplateColumns={'169px 610px 224px'}
			mt={125}
		>
			<Sidebar />
			<Flex flexDir='column'>{children}</Flex>
			<PageContents sidebarTitles={sidebarTitles} />
		</Grid>
	)
}
