import { Button, colors, Flex, Template } from '@merely-ui/react'

export default function SearchBar() {
	return (
		<Button
			variant='clear'
			w={560}
			h={34}
			border={`1px solid ${colors.gray.$700}`}
			px={20}
			py={12}
			color={colors.gray.$500}
			display='flex'
			justifyContent='space-between'
			alignItems='center'
			fontSize={18}
			borderRadius={10}
			_hover={{
				bgColor: colors.gray.$900,
			}}
		>
			<span>Search documentation</span>
			<Flex gap={4}>
				<Template
					fontSize={14}
					fontWeight={500}
					px={5}
					border={`1px solid ${colors.gray.$200}`}
					color={colors.gray.$200}
					borderRadius={5}
				>
					Ctrl
				</Template>
				<Template
					fontSize={14}
					fontWeight={500}
					px={5}
					border={`1px solid ${colors.gray.$200}`}
					color={colors.gray.$200}
					borderRadius={5}
				>
					K
				</Template>
			</Flex>
		</Button>
	)
}
