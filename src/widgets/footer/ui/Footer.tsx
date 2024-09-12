import { colors, Flex, Text } from '@merely-ui/react'
import { memo } from 'react'

function Footer() {
	return (
		<Flex as='footer' justifyContent='center' py={25} mt={60}>
			<Text color={colors.gray.$400}>Made by Ivan Blinov</Text>
		</Flex>
	)
}

export default memo(Footer)
