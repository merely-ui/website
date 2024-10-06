import { colors, Flex, Text, useDisclosure } from '@merely-ui/react'
import { FC, ReactElement } from 'react'
import { cn } from '../../lib/classNames/classNames'
import styles from './Accordion.module.css'
import Arrow from './Arrow'

interface AccordionProps {
	className?: string
	label: string
	content: ReactElement
}

export const Accordion: FC<AccordionProps> = ({
	className,
	label,
	content,
}) => {
	const { isOpen, toggle } = useDisclosure()

	return (
		<div
			role='button'
			onClick={toggle}
			className={cn(styles.accordion, className)}
		>
			<div className={styles.top}>
				<Text className='select-none'>{label}</Text>
				<Arrow
					className={cn(styles.arrow, {
						[styles.arrowOpen]: isOpen,
					})}
				/>
			</div>
			<div
				className={cn(styles.content, {
					[styles.opened]: isOpen,
				})}
			>
				<div className={styles.inner}>
					<Flex
						flexDir='column'
						ml={10}
						mt={10}
						pl={15}
						borderLeft={`1px solid ${colors.gray.$500}`}
					>
						{content}
					</Flex>
				</div>
			</div>
		</div>
	)
}
