'use client'

import { Select, SelectItem, useColorMode } from '@merely-ui/react'
import { memo } from 'react'

function ToggleTheme() {
	const { colorMode, setColorMode } = useColorMode()

	return (
		<Select
			onChange={value => setColorMode(value)}
			minW={90}
			buttonProps={{
				maxH: 36,
				fontSize: 14,
			}}
			listProps={{
				fontSize: 14,
			}}
		>
			<SelectItem value='dark' selected={colorMode === 'dark'}>
				Dark
			</SelectItem>
			<SelectItem value='light' selected={colorMode === 'light'}>
				Light
			</SelectItem>
		</Select>
	)
}

export default memo(ToggleTheme)
