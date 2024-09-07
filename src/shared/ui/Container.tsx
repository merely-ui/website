import { Template } from '@merely-ui/react'
import { ReactNode } from 'react'

export default function Container({ children }: { children: ReactNode }) {
	return (
		<Template maxW={1440} px={20} mx={'auto'}>
			{children}
		</Template>
	)
}
