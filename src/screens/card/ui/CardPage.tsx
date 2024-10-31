import ShikiCodeBlock from '@/src/shared/lib/shiki/ShikiCodeBlock'
import { DocsPage, SidebarTitles } from '@/src/widgets/docs-page'
import { Card, Flex, Text, Title } from '@merely-ui/react'
import { ImportCode, SizesCode } from '../model/code'

const sidebarTitles: SidebarTitles = [
	{
		text: 'Import',
		idAttr: 'import',
	},
	{
		text: 'Usage',
		idAttr: 'usage',
	},
	{
		text: 'Sizes',
		idAttr: 'sizes',
	},
]

export default function CardPage() {
	return (
		<DocsPage sidebarTitles={sidebarTitles}>
			<Title fontSize={30} fontWeight={700} mb={20}>
				Card
			</Title>
			<Text mb={16}>
				The Card component presents content in a stylish, encapsulated layout
				for easy organization and display.
			</Text>
			<Title scrollMarginTop={125} id='import' size='2xl' mb={12} mt={32}>
				Import
			</Title>
			<ShikiCodeBlock code={ImportCode} />
			<Title id='usage' size='2xl' mb={12} mt={32}>
				Usage
			</Title>
			<Card>
				<Card>Some card</Card>
			</Card>
			<Title id='sizes' size='2xl' mb={8} mt={32}>
				Sizes
			</Title>
			<Text mb={16}>`_size` prop is changing size of the card.</Text>
			<Card mb={8}>
				<Flex alignItems='center'>
					<Card _size='s'>Card</Card>
					<Card _size='m'>Card</Card>
					<Card _size='l'>Card</Card>
				</Flex>
			</Card>
			<ShikiCodeBlock code={SizesCode} />
		</DocsPage>
	)
}
