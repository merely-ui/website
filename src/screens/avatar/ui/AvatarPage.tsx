import ShikiCodeBlock from '@/src/shared/lib/shiki/ShikiCodeBlock'
import { DocsPage, SidebarTitles } from '@/src/widgets/docs-page'
import { Avatar, AvatarBadge, Card, Flex, Text, Title } from '@merely-ui/react'
import { CustomSizeCode, ImportCode, SizesCode } from '../model/code'

const sidebarTitles: SidebarTitles = [
	{
		text: '',
		idAttr: '',
	},
]

export default function AvatarPage() {
	return (
		<DocsPage sidebarTitles={sidebarTitles}>
			<Title fontSize={30} fontWeight={700} mb={20}>
				Avatar
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
				<Flex>
					<Avatar />
				</Flex>
			</Card>
			<Title id='sizes' size='2xl' mb={8} mt={32}>
				Sizes
			</Title>
			<Text mb={16}>`_size` prop is changing size of the avatar.</Text>
			<Card mb={8}>
				<Flex alignItems='center'>
					<Avatar _size='s' />
					<Avatar _size='m' />
					<Avatar _size='l' />
				</Flex>
			</Card>
			<ShikiCodeBlock code={SizesCode} />
			<Title id='variants' size='2xl' mb={8} mt={32}>
				Custom size
			</Title>
			<Text mb={16}>`variant` prop is changing variant of the button.</Text>
			<Card mb={8}>
				<Flex>
					<Avatar w={20} />
				</Flex>
			</Card>
			<ShikiCodeBlock code={CustomSizeCode} />
			<Title id='variants' size='2xl' mb={8} mt={32}>
				Using avatar badges
			</Title>
			<Text mb={16}>`variant` prop is changing variant of the button.</Text>
			<Card mb={8}>
				<Flex>
					<Avatar>
						<AvatarBadge placement='top-right' w={5} variant='offline' />
					</Avatar>
					<Avatar>
						<AvatarBadge variant='online' />
					</Avatar>
				</Flex>
			</Card>
			<ShikiCodeBlock code={CustomSizeCode} />
		</DocsPage>
	)
}
