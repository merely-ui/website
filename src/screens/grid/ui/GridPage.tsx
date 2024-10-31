import ShikiCodeBlock from '@/src/shared/lib/shiki/ShikiCodeBlock'
import { DocsPage, SidebarTitles } from '@/src/widgets/docs-page'
import { Box, Card, colors, Grid, Text, Title } from '@merely-ui/react'
import { ImportCode, UsageCode } from '../model/code'

const sidebarTitles: SidebarTitles = [
	{
		text: 'Import',
		idAttr: 'import',
	},
	{
		text: 'Usage',
		idAttr: 'usage',
	},
]

export default function GridPage() {
	return (
		<DocsPage sidebarTitles={sidebarTitles}>
			<Title fontSize={30} fontWeight={700} mb={20}>
				Grid
			</Title>
			<Text mb={16}>
				Grid is a component that allows you to easily manipulate elements in two
				axes concurrently.
			</Text>
			<Title scrollMarginTop={125} id='import' size='2xl' mb={12} mt={32}>
				Import
			</Title>
			<ShikiCodeBlock code={ImportCode} />
			<Title id='usage' size='2xl' mb={12} mt={32}>
				Usage
			</Title>
			<Card mb={8}>
				<Grid gridTemplateColumns='repeat(2, max-content)'>
					<Box w={25} h={25} bgColor={colors.yellow.$200} />
					<Box w={25} h={25} bgColor={colors.yellow.$200} />
					<Box w={25} h={25} bgColor={colors.yellow.$200} />
					<Box w={25} h={25} bgColor={colors.yellow.$200} />
				</Grid>
			</Card>
			<ShikiCodeBlock code={UsageCode} />
		</DocsPage>
	)
}
