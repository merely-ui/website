'use client'

import { Select, SelectItem, useColorTheme } from '@merely-ui/react'
import { memo } from 'react'

function ToggleTheme() {
	const { theme } = useColorTheme()

	return (
		<Select minW={110}>
			<SelectItem selected={theme === 'dark'}>Dark</SelectItem>
			<SelectItem selected={theme === 'light'}>Light</SelectItem>
		</Select>
	)
}

export default memo(ToggleTheme)
