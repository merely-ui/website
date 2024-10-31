import ShikiCodeBlock from '@/src/shared/lib/shiki/ShikiCodeBlock'
import { DocsPage, SidebarTitles } from '@/src/widgets/docs-page'
import { Box, Card, colors, Flex, Text, Title } from '@merely-ui/react'
import { DirectionCode, ImportCode, UsageCode } from '../model/code'

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
		text: 'Changing direction',
		idAttr: 'direction',
	},
]

export default function FlexPage() {
	return (
		<DocsPage sidebarTitles={sidebarTitles}>
			<Title fontSize={30} fontWeight={700} mb={20}>
				Flex
			</Title>
			<Text mb={16}>
				Flex is a component that allows you to easily manipulate elements in one
				of the axes
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
					<Box w={25} h={25} bgColor={colors.yellow.$200} />
					<Box w={25} h={25} bgColor={colors.yellow.$200} />
					<Box w={25} h={25} bgColor={colors.yellow.$200} />
				</Flex>
			</Card>
			<ShikiCodeBlock code={UsageCode} />
			<Title id='direction' size='2xl' mb={12} mt={32}>
				Changing direction
			</Title>
			<Text mb={16}>
				You can use `flexDir` shorthand property to change a direction.
			</Text>
			<Card mb={8}>
				<Flex flexDir='column'>
					<Box w={25} h={25} bgColor={colors.yellow.$200} />
					<Box w={25} h={25} bgColor={colors.yellow.$200} />
					<Box w={25} h={25} bgColor={colors.yellow.$200} />
				</Flex>
			</Card>
			<ShikiCodeBlock code={DirectionCode} />
		</DocsPage>
	)
}
