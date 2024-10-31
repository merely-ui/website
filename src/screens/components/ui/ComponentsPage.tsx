import { DocsPage, SidebarTitles } from '@/src/widgets/docs-page'
import { Card, Grid, Text, Title } from '@merely-ui/react'
import Link from 'next/link'
import {
	dataDisplayComponents,
	interactionsComponents,
	layoutComponents,
	typographyComponents,
} from '../model/list-items'

const sidebarTitles: SidebarTitles = [
	{
		text: 'Components list',
		idAttr: 'components',
	},
]

export default function ComponentsPage() {
	return (
		<DocsPage sidebarTitles={sidebarTitles}>
			<Title
				id='components'
				scrollMarginTop={125}
				fontSize={30}
				fontWeight={700}
				mb={12}
			>
				Components list
			</Title>
			<Text mb={16}>
				Below you can see a list of components which Merely UI provides:
			</Text>
			<Title id='frameworks-supported' size='l' mb={8} mt={20}>
				Interactions
			</Title>
			<Grid gridTemplateColumns='repeat(2,1fr)'>
				{interactionsComponents.map(c => (
					<Link key={c.link} href={c.link}>
						<Card _hover={{ color: '#0051FF' }}>
							<Text
								transition='color 0.2s ease'
								color='inherit'
								fontWeight={500}
							>
								{c.text}
							</Text>
						</Card>
					</Link>
				))}
			</Grid>
			<Title id='frameworks-supported' size='l' mb={8} mt={20}>
				Layout
			</Title>
			<Grid gridTemplateColumns='repeat(2,1fr)'>
				{layoutComponents.map(c => (
					<Link key={c.link} href={c.link}>
						<Card _hover={{ color: '#0051FF' }}>
							<Text
								transition='color 0.2s ease'
								color='inherit'
								fontWeight={500}
							>
								{c.text}
							</Text>
						</Card>
					</Link>
				))}
			</Grid>
			<Title id='frameworks-supported' size='l' mb={8} mt={20}>
				Data display
			</Title>
			<Grid gridTemplateColumns='repeat(2,1fr)'>
				{dataDisplayComponents.map(c => (
					<Link key={c.link} href={c.link}>
						<Card _hover={{ color: '#0051FF' }}>
							<Text
								transition='color 0.2s ease'
								color='inherit'
								fontWeight={500}
							>
								{c.text}
							</Text>
						</Card>
					</Link>
				))}
			</Grid>
			<Title id='frameworks-supported' size='l' mb={8} mt={20}>
				Typography
			</Title>
			<Grid gridTemplateColumns='repeat(2,1fr)'>
				{typographyComponents.map(c => (
					<Link key={c.link} href={c.link}>
						<Card _hover={{ color: '#0051FF' }}>
							<Text
								transition='color 0.2s ease'
								color='inherit'
								fontWeight={500}
							>
								{c.text}
							</Text>
						</Card>
					</Link>
				))}
			</Grid>
		</DocsPage>
	)
}
