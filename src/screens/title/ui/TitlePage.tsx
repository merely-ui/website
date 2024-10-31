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
		text: 'Changing title level',
		idAttr: 'as',
	},
]

export default function TitlePage() {
	return (
		<DocsPage sidebarTitles={sidebarTitles}>
			<Title fontSize={30} fontWeight={700} mb={20}>
				Title
			</Title>
			<Text mb={16}>
				Title component is used to create headings at an interface.
			</Text>
			<Title scrollMarginTop={125} id='import' size='2xl' mb={12} mt={32}>
				Import
			</Title>
			<ShikiCodeBlock code={ImportCode} />
			<Title id='usage' size='2xl' mb={12} mt={32}>
				Usage
			</Title>
			<Card>
				<Title>It&apos;s a Title</Title>
			</Card>
			<Title id='sizes' size='2xl' mb={8} mt={32}>
				Sizes
			</Title>
			<Text mb={16}>`_size` prop is changing size of the text component.</Text>
			<Card mb={8}>
				<Flex alignItems='flex-start' flexDir='column'>
					<Title size='xs'>Some Title...</Title>
					<Title size='s'>Some Title...</Title>
					<Title size='m'>Some Title...</Title>
					<Title size='l'>Some Title...</Title>
					<Title size='xl'>Some Title...</Title>
					<Title size='2xl'>Some Title...</Title>
					<Title size='3xl'>Some Title...</Title>
				</Flex>
			</Card>
			<ShikiCodeBlock code={SizesCode} />
			<Title id='as' size='2xl' mb={8} mt={32}>
				Changing title level
			</Title>
			<Text mb={16}>
				By default, `Title` component is rendering `h3` HTML element, but you
				can easily change it by using `as` prop.
			</Text>
			<Card mb={8}>
				<Flex alignItems='flex-start' flexDir='column'>
					<Title as='h2'>I am h2😀</Title>
					<Text as='h4'>I am a h4!😀</Text>
				</Flex>
			</Card>
			<ShikiCodeBlock code={AsPropCode} />
		</DocsPage>
	)
}
