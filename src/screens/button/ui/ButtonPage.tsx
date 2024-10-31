import ShikiCodeBlock from '@/src/shared/lib/shiki/ShikiCodeBlock'
import { DocsPage, SidebarTitles } from '@/src/widgets/docs-page'
import { Button, Card, Flex, Text, Title } from '@merely-ui/react'
import { ImportCode, SizesCode, VariantsCode } from '../model/code'

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
	{
		text: 'Variants',
		idAttr: 'variants',
	},
]

export default function ButtonPage() {
	return (
		<DocsPage sidebarTitles={sidebarTitles}>
			<Title fontSize={30} fontWeight={700} mb={20}>
				Button
			</Title>
			<Text mb={16}>
				The Button element represents a clickable button used to trigger actions
				or submit forms.
			</Text>
			<Title scrollMarginTop={150} id='import' size='2xl' mb={12} mt={32}>
				Import
			</Title>
			<ShikiCodeBlock code={ImportCode} />
			<Title id='usage' size='2xl' mb={12} mt={32}>
				Usage
			</Title>
			<Card>
				<Button>Button</Button>
			</Card>
			<Title id='sizes' size='2xl' mb={8} mt={32}>
				Sizes
			</Title>
			<Text mb={16}>`_size` prop is changing size of the button.</Text>
			<Card mb={8}>
				<Flex alignItems='center' justifyContent='space-between'>
					<Button _size='xs'>Button</Button>
					<Button _size='s'>Button</Button>
					<Button _size='m'>Button</Button>
					<Button _size='l'>Button</Button>
					<Button _size='xl'>Button</Button>
				</Flex>
			</Card>
			<ShikiCodeBlock code={SizesCode} />
			<Title id='variants' size='2xl' mb={8} mt={32}>
				Variants
			</Title>
			<Text mb={16}>`variant` prop is changing variant of the button.</Text>
			<Card mb={8}>
				<Flex>
					<Button variant='default'>Button</Button>
					<Button variant='outline'>Button</Button>
					<Button variant='clear'>Button</Button>
				</Flex>
			</Card>
			<ShikiCodeBlock code={VariantsCode} />
		</DocsPage>
	)
}
