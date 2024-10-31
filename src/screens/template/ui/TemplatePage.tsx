import ShikiCodeBlock from '@/src/shared/lib/shiki/ShikiCodeBlock'
import { DocsPage, SidebarTitles } from '@/src/widgets/docs-page'
import {
	Box,
	Card,
	colors,
	Flex,
	Template,
	Text,
	Title,
} from '@merely-ui/react'
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

export default function TemplatePage() {
	return (
		<DocsPage sidebarTitles={sidebarTitles}>
			<Title fontSize={30} fontWeight={700} mb={20}>
				Template (Box)
			</Title>
			<Text mb={16}>
				Template component is used to create your own components. Renders blank
				`div` by default.
			</Text>
			<Title scrollMarginTop={125} id='import' size='2xl' mb={12} mt={32}>
				Import
			</Title>
			<ShikiCodeBlock code={ImportCode} />
			<Title id='usage' size='2xl' mb={12} mt={32}>
				Usage
			</Title>
			<Card mb={8}>
				<Flex>
					<Template w={30} height={30} bgColor={colors.cyan.$200} />
					<Box w={30} height={30} bgColor={colors.purple.$200} />
				</Flex>
			</Card>
			<ShikiCodeBlock code={UsageCode} />
		</DocsPage>
	)
}
