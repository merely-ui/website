import ShikiCodeBlock from '@/src/shared/lib/shiki/ShikiCodeBlock'
import { DocsPage, SidebarTitles } from '@/src/widgets/docs-page'
import { Card, colors, Flex, Switch, Text, Title } from '@merely-ui/react'
import {
	ActiveBgCode,
	ControlledUsageCode,
	ImportCode,
	SizesCode,
	UsageCode,
} from '../model/code'

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
	{
		text: 'Changing active background color',
		idAttr: 'active-bg',
	},
]

export default function SwitchPage() {
	return (
		<DocsPage sidebarTitles={sidebarTitles}>
			<Title fontSize={30} fontWeight={700} mb={20}>
				Switch
			</Title>
			<Text mb={16}>
				The Switch component in React is a controlled input for selecting
				between two mutually exclusive options.
			</Text>
			<Title scrollMarginTop={125} id='import' size='2xl' mb={12} mt={32}>
				Import
			</Title>
			<ShikiCodeBlock code={ImportCode} />
			<Title id='usage' size='2xl' mb={12} mt={32}>
				Usage
			</Title>
			<Card>
				<Flex>
					<Switch />
					<Switch toggled />
					<Switch />
				</Flex>
			</Card>
			<ShikiCodeBlock code={UsageCode} />
			<Title id='sizes' size='2xl' mb={8} mt={32}>
				Sizes
			</Title>
			<Text mb={16}>`_size` prop is changing size of the switch.</Text>
			<Card mb={8}>
				<Flex>
					<Switch _size='s' />
					<Switch _size='m' />
					<Switch _size='l' />
				</Flex>
			</Card>
			<ShikiCodeBlock code={SizesCode} />
			<Title id='controlled-usage' size='2xl' mb={8} mt={32}>
				Controlled Usage
			</Title>
			<Text mb={16}>Below you can see example of controlled switch usage.</Text>
			<Card mb={8}>
				<Switch />
			</Card>
			<ShikiCodeBlock code={ControlledUsageCode} />
			<Title id='active-bg' size='2xl' mb={8} mt={32}>
				Changing active background color
			</Title>
			<Card mb={8}>
				<Switch activeBgColor={colors.purple.$300} />
			</Card>
			<ShikiCodeBlock code={ActiveBgCode} />
		</DocsPage>
	)
}
