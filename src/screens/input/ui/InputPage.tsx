import ShikiCodeBlock from '@/src/shared/lib/shiki/ShikiCodeBlock'
import { DocsPage, SidebarTitles } from '@/src/widgets/docs-page'
import { Card, Flex, Input, Text, Title } from '@merely-ui/react'
import { ImportCode, PlaceholderCode, SizesCode } from '../model/code'

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
		text: 'Placeholder styling',
		idAttr: 'placeholder',
	},
]

export default function InputPage() {
	return (
		<DocsPage sidebarTitles={sidebarTitles}>
			<Title fontSize={30} fontWeight={700} mb={20}>
				Input
			</Title>
			<Text mb={16}>
				The input element is used to create interactive controls in a web form
				that users can use to enter data.
			</Text>
			<Title scrollMarginTop={125} id='import' size='2xl' mb={12} mt={32}>
				Import
			</Title>
			<ShikiCodeBlock code={ImportCode} />
			<Title id='usage' size='2xl' mb={12} mt={32}>
				Usage
			</Title>
			<Card>
				<Input placeholder='Type here' />
			</Card>
			<Title id='sizes' size='2xl' mb={8} mt={32}>
				Sizes
			</Title>
			<Text mb={16}>`_size` prop is changing size of the input.</Text>
			<Card mb={8}>
				<Flex alignItems='flex-start' flexDir='column'>
					<Input placeholder='The smallest' _size='xs' />
					<Input placeholder='Smaller' _size='s' />
					<Input placeholder='Normal' _size='m' />
					<Input placeholder='Bigger' _size='l' />
					<Input placeholder='The biggest' _size='xl' />
				</Flex>
			</Card>
			<ShikiCodeBlock code={SizesCode} />
			<Title id='placeholder' size='2xl' mb={8} mt={32}>
				Placeholder styling
			</Title>
			<Text mb={16}>
				Use the `_placeholder` prop to apply your own styles to the placeholder
				of the input.
			</Text>
			<Card mb={8}>
				<Flex flexDir='column'>
					<Input placeholder='Default placeholder' />
					<Input
						placeholder='Default placeholder'
						_placeholder={{
							color: 'red',
						}}
					/>
				</Flex>
			</Card>
			<ShikiCodeBlock code={PlaceholderCode} />
		</DocsPage>
	)
}
