'use client'

import { useColorMode } from '@merely-ui/react'
import { memo, useMemo } from 'react'

const Arrow = ({ className }: { className?: string }) => {
	const { colorMode } = useColorMode()
	const fill = useMemo(
		() => (colorMode == 'dark' ? 'white' : 'black'),
		[colorMode]
	)

	return (
		<svg
			width='9'
			height='17'
			viewBox='0 0 9 17'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			className={className}
		>
			<path
				d='M8.52278 1.40604C8.59797 1.32648 8.65674 1.23289 8.69575 1.13062C8.73477 1.02835 8.75325 0.919389 8.75016 0.809971C8.74706 0.700552 8.72245 0.592815 8.67771 0.49291C8.63298 0.393005 8.56901 0.302889 8.48945 0.227708C8.40989 0.152526 8.3163 0.0937506 8.21403 0.0547377C8.11176 0.0157247 8.0028 -0.00276195 7.89338 0.000333335C7.78396 0.00342862 7.67623 0.0280451 7.57632 0.0727774C7.47642 0.11751 7.3863 0.181482 7.31112 0.261041L0.227785 7.76104C0.0815052 7.91576 0 8.12061 0 8.33354C0 8.54647 0.0815052 8.75132 0.227785 8.90604L7.31112 16.4069C7.3858 16.4882 7.4759 16.5538 7.57617 16.6C7.67644 16.6462 7.78489 16.672 7.89522 16.6759C8.00555 16.6798 8.11556 16.6618 8.21886 16.6228C8.32215 16.5839 8.41668 16.5248 8.49695 16.449C8.57722 16.3732 8.64162 16.2822 8.68643 16.1813C8.73123 16.0804 8.75554 15.9716 8.75795 15.8613C8.76035 15.7509 8.7408 15.6411 8.70043 15.5384C8.66006 15.4356 8.59968 15.3419 8.52278 15.2627L1.97945 8.33354L8.52278 1.40604Z'
				fill={fill}
			/>
		</svg>
	)
}

export default memo(Arrow)
