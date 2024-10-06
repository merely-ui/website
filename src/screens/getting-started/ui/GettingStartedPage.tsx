import ShikiCodeBlock from '@/src/shared/lib/shiki/ShikiCodeBlock'
import { DocsPage } from '@/src/widgets/docs-page'
import { Card, colors, Text, Title } from '@merely-ui/react'
import { InstallationCode, MerelyProviderCode } from '../model/code'

export default function GettingStartedPage() {
	return (
		<DocsPage>
			<Title fontSize={30} fontWeight={700} mb={20}>
				Getting started
			</Title>
			<Text mb={15}>
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
			<Text my={25}>
				After installing Merely UI, you need to wrap root of your application in
				`MerelyProvider`.
			</Text>
			<ShikiCodeBlock code={MerelyProviderCode} />
		</DocsPage>
	)
}
