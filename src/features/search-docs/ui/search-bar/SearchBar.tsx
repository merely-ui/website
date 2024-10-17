'use client'

import { Button, colors, Flex, Template, useColorMode } from '@merely-ui/react'
import { memo } from 'react'

function SearchBar() {
	const { colorMode } = useColorMode()

	return (
		<Button
			variant='clear'
			w={572}
			h={24}
			px={18}
			py={9}
			color={colors.gray.$500}
			display='flex'
			justifyContent='space-between'
			alignItems='center'
			fontSize={16}
			borderRadius={8}
			_hover={{
				bgColor: colorMode === 'dark' ? colors.gray.$900 : '#EEE',
			}}
			_light={{
				border: `1px solid ${colors.gray.$200}`,
				color: colors.gray.$100,
				bgColor: 'rgba(255, 255, 255, 0.1)',
			}}
			_dark={{
				border: `1px solid ${colors.gray.$700}`,
				bgColor: 'black',
			}}
		>
			<span>Search documentation</span>
			<Flex gap={4}>
				<Template
					fontSize={14}
					fontWeight={500}
					px={4}
					border={`1px solid ${colors.gray.$200}`}
					color={colors.gray.$200}
					borderRadius={5}
				>
					Ctrl
				</Template>
				<Template
					fontSize={14}
					fontWeight={500}
					px={4}
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

export default memo(SearchBar)
