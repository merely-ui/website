import ShikiCodeBlock from '@/src/shared/lib/shiki/ShikiCodeBlock'
import { DocsPage, SidebarTitles } from '@/src/widgets/docs-page'
import { Card, colors, Flex, Tag, Text, Title } from '@merely-ui/react'
import { ImportCode, SizesCode, UsageCode, VariantsCode } from '../model/code'

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

export default function TagPage() {
	return (
		<DocsPage sidebarTitles={sidebarTitles}>
			<Title fontSize={30} fontWeight={700} mb={20}>
				Tag
			</Title>
			<Text mb={16}>
				The Tag component represents a label or category, often used to
				highlight keywords or topics within content.
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
					<Tag>Sale</Tag>
					<Tag bgColor={colors.teal.$200}>Sale</Tag>
					<Tag bgColor={colors.orange.$200}>Sale</Tag>
				</Flex>
			</Card>
			<ShikiCodeBlock code={UsageCode} />
			<Title id='sizes' size='2xl' mb={8} mt={32}>
				Sizes
			</Title>
			<Text mb={16}>`_size` prop is changing size of the tag.</Text>
			<Card mb={8}>
				<Flex alignItems='center'>
					<Tag _size='s'>Tag</Tag>
					<Tag _size='m'>Tag</Tag>
					<Tag _size='l'>Tag</Tag>
				</Flex>
			</Card>
			<ShikiCodeBlock code={SizesCode} />
			<Title id='variants' size='2xl' mb={8} mt={32}>
				Variants
			</Title>
			<Text mb={16}>`variant` prop is changing variant of the tag.</Text>
			<Card mb={8}>
				<Flex alignItems='center'>
					<Tag variant='solid'>Tag</Tag>
					<Tag variant='outline'>Tag</Tag>
				</Flex>
			</Card>
			<ShikiCodeBlock code={VariantsCode} />
		</DocsPage>
	)
}
