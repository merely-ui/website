import ShikiCodeBlock from '@/src/shared/lib/shiki/ShikiCodeBlock'
import { DocsPage, SidebarTitles } from '@/src/widgets/docs-page'
import { Card, Flex, Text, Textarea, Title } from '@merely-ui/react'
import { ControlledUsageCode, ImportCode, SizesCode } from '../model/code'

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
		text: 'Controlled Usage',
		idAttr: 'controlled-usage',
	},
]

export default function TextareaPage() {
	return (
		<DocsPage sidebarTitles={sidebarTitles}>
			<Title fontSize={30} fontWeight={700} mb={20}>
				Textarea
			</Title>
			<Text mb={16}>
				The Textarea component in React is a multi-line text input control that
				allows users to enter and edit long-form text content.
			</Text>
			<Title scrollMarginTop={125} id='import' size='2xl' mb={12} mt={32}>
				Import
			</Title>
			<ShikiCodeBlock code={ImportCode} />
			<Title id='usage' size='2xl' mb={12} mt={32}>
				Usage
			</Title>
			<Card>
				<Textarea />
			</Card>
			<Title id='sizes' size='2xl' mb={8} mt={32}>
				Sizes
			</Title>
			<Text mb={16}>`_size` prop is changing size of the textarea.</Text>
			<Card mb={8}>
				<Flex alignItems='flex-start' flexDir='column'>
					<Textarea _size='s' />
					<Textarea _size='m' />
					<Textarea _size='l' />
				</Flex>
			</Card>
			<ShikiCodeBlock code={SizesCode} />
			<Title id='controlled-usage' size='2xl' mb={8} mt={32}>
				Controlled Usage
			</Title>
			<Text mb={16}>
				Below you can see example of controlled textarea usage.
			</Text>
			<Card mb={8}>
				<Textarea />
			</Card>
			<ShikiCodeBlock code={ControlledUsageCode} />
		</DocsPage>
	)
}
