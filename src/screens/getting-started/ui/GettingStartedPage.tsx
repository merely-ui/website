import ShikiCodeBlock from '@/src/shared/lib/shiki/ShikiCodeBlock'
import { DocsPage, SidebarTitles } from '@/src/widgets/docs-page'
import { Card, colors, Text, Title } from '@merely-ui/react'
import { InstallationCode, MerelyProviderCode } from '../model/code'

const sidebarTitles: SidebarTitles = [
	{
		text: 'Getting started',
		idAttr: 'getting-started',
	},
	{
		text: 'Frameworks supported',
		idAttr: 'frameworks-supported',
	},
]

export default function GettingStartedPage() {
	return (
		<DocsPage sidebarTitles={sidebarTitles}>
			<Title
				id='getting-started'
				scrollMarginTop={125}
				fontSize={30}
				fontWeight={700}
				mb={20}
			>
				Getting started
			</Title>
			<Text mb={16}>
				To install Merely UI in your project, run one of the following commands
				in your terminal:
			</Text>
			<ShikiCodeBlock code={InstallationCode} lang={'bash'} />
			<Card
				border={'none'}
				borderLeft={`3px solid ${colors.teal.$100}`}
				borderTopLeftRadius={0}
				borderBottomLeftRadius={0}
			>
				Merely UI is only compatible with React 18
			</Card>
			<Text my={24}>
				After installing Merely UI, you need to wrap root of your application in
				`MerelyProvider`.
			</Text>
			<ShikiCodeBlock code={MerelyProviderCode} />
			<Title id='frameworks-supported' size='2xl' mb={12} mt={40}>
				Frameworks supported
			</Title>
			<Text mb={16}>
				Below you can see table of frameworks, which Merely UI supports:
			</Text>
		</DocsPage>
	)
}
