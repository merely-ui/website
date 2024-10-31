import ShikiCodeBlock from '@/src/shared/lib/shiki/ShikiCodeBlock'
import { DocsPage, SidebarTitles } from '@/src/widgets/docs-page'
import { Card, Flex, Text, Title } from '@merely-ui/react'
import { AsPropCode, ImportCode, SizesCode } from '../model/code'

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
		text: 'Using `as` prop',
		idAttr: 'as',
	},
]

export default function TextPage() {
	return (
		<DocsPage sidebarTitles={sidebarTitles}>
			<Title fontSize={30} fontWeight={700} mb={20}>
				Text
			</Title>
			<Text mb={16}>
				Text component is used to create text at an interface.
			</Text>
			<Title scrollMarginTop={125} id='import' size='2xl' mb={12} mt={32}>
				Import
			</Title>
			<ShikiCodeBlock code={ImportCode} />
			<Title id='usage' size='2xl' mb={12} mt={32}>
				Usage
			</Title>
			<Card>
				<Text>Some text...</Text>
			</Card>
			<Title id='sizes' size='2xl' mb={8} mt={32}>
				Sizes
			</Title>
			<Text mb={16}>`_size` prop is changing size of the text component.</Text>
			<Card mb={8}>
				<Flex alignItems='flex-start' flexDir='column'>
					<Text _size='xs'>Some text...</Text>
					<Text _size='s'>Some text...</Text>
					<Text _size='m'>Some text...</Text>
					<Text _size='l'>Some text...</Text>
					<Text _size='xl'>Some text...</Text>
					<Text _size='2xl'>Some text...</Text>
					<Text _size='3xl'>Some text...</Text>
				</Flex>
			</Card>
			<ShikiCodeBlock code={SizesCode} />
			<Title id='as' size='2xl' mb={8} mt={32}>
				Using `as` prop
			</Title>
			<Text mb={16}>
				By default, `Text` component is rendering `p` HTML element, but you can
				change it by using `as` prop.
			</Text>
			<Card mb={8}>
				<Flex alignItems='flex-start' flexDir='column'>
					<Text as='span'>I rendered as span😀</Text>
					<Text as='div'>I am a div!😀</Text>
				</Flex>
			</Card>
			<ShikiCodeBlock code={AsPropCode} />
		</DocsPage>
	)
}
