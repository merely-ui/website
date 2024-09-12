import Accessible from '@/src/shared/assets/accessible.svg'
import Customizable from '@/src/shared/assets/customizable.svg'
import Lightweight from '@/src/shared/assets/light.svg'
import Moon from '@/src/shared/assets/moon.svg'
import {
	Card,
	colors,
	Flex,
	Grid,
	Template,
	Text,
	Title,
} from '@merely-ui/react'
import Image from 'next/image'
import { memo } from 'react'

function Features() {
	return (
		<Template mb={150}>
			<Title
				textAlign='center'
				fontSize={64}
				size='3xl'
				as='h2'
				className='gradient-silver'
				mb={90}
			>
				Features
			</Title>

			<Grid
				gap={30}
				maxW={900}
				mx={'auto'}
				gridTemplateColumns={'repeat(2, 1fr)'}
			>
				<Card p={30} display='flex' flexDir='column' gap={16}>
					<Flex gap={12} alignItems='center'>
						<Template
							w={35}
							h={35}
							display='flex'
							justifyContent='center'
							alignItems='center'
							bgColor={colors.gray.$600}
							borderRadius={'999px'}
						>
							<Image src={Lightweight} alt='Light' />
						</Template>
						<Text fontWeight={'600'}>Lightweight</Text>
					</Flex>
					<Text color={colors.gray.$200} fontWeight={500}>
						Merely UI bundle size is really small and amounts to 3.3kb at
						minzipped variant.
					</Text>
				</Card>
				<Card p={30} display='flex' flexDir='column' gap={16}>
					<Flex gap={12} alignItems='center'>
						<Template
							w={35}
							h={35}
							display='flex'
							justifyContent='center'
							alignItems='center'
							bgColor={colors.gray.$600}
							borderRadius={'999px'}
						>
							<Image src={Accessible} alt='Accessible' />
						</Template>
						<Text fontWeight={'600'}>Accessible</Text>
					</Flex>
					<Text color={colors.gray.$200} fontWeight={500}>
						Merely UI components follow the WAI-ARIA guidelines specifications.
					</Text>
				</Card>
				<Card p={30} display='flex' flexDir='column' gap={16}>
					<Flex gap={12} alignItems='center'>
						<Template
							w={35}
							h={35}
							display='flex'
							justifyContent='center'
							alignItems='center'
							bgColor={colors.gray.$600}
							borderRadius={'999px'}
						>
							<Image src={Moon} alt='Moon' />
						</Template>
						<Text fontWeight={'600'}>Color Mode Switch</Text>
					</Flex>
					<Text color={colors.gray.$200} fontWeight={500}>
						Merely UI has easy color mode switching out-of-the-box and all
						components are compatible with Light and Dark mode
					</Text>
				</Card>
				<Card p={30} display='flex' flexDir='column' gap={16}>
					<Flex gap={12} alignItems='center'>
						<Template
							w={35}
							h={35}
							display='flex'
							justifyContent='center'
							alignItems='center'
							bgColor={colors.gray.$600}
							borderRadius={'999px'}
						>
							<Image src={Customizable} alt='Customizable' />
						</Template>
						<Text fontWeight={'600'}>Customizable</Text>
					</Flex>
					<Text color={colors.gray.$200} fontWeight={500}>
						Merely UI components are adapted so that they can be easily changed
					</Text>
				</Card>
			</Grid>
		</Template>
	)
}

export default memo(Features)
