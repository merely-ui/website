import GithubIcon from '@/src/shared/assets/github.svg'
import { Features } from '@/src/widgets/features'
import { Button, colors, Flex, Text, Title } from '@merely-ui/react'
import Image from 'next/image'
import Link from 'next/link'

export default function HomePage() {
	return (
		<main>
			<Flex
				flexDir='column'
				justifyContent='center'
				alignItems='center'
				h={'40rem'}
				mb={'10rem'}
				gap={30}
			>
				<Title as={'h1'} size='3xl' fontSize={64}>
					<span className='gradient-purple'>Fast </span>
					<span className='gradient-silver'>to write, </span>
					<span className='gradient-green'>fast </span>
					<span className='gradient-silver'>to load</span>
				</Title>
				<Text
					_size='xl'
					maxW={600}
					fontSize={22}
					textAlign='center'
					color={colors.gray.$300}
				>
					Merely UI is a simple, accessible and lightweight library for your
					React apps
				</Text>
				<Flex mt={40}>
					<Link href={'/getting-started'}>
						<Button
							_size='xl'
							px={35}
							py={10}
							h={50}
							alignItems='center'
							borderRadius={10}
						>
							Get started
						</Button>
					</Link>
					<a href='https://github.com/merely-ui/merely-ui'>
						<Button
							_size='xl'
							px={25}
							py={10}
							h={50}
							alignItems='center'
							color='white'
							bgColor={colors.gray.$800}
							borderRadius={10}
							gap={8}
							_hover={{
								bgColor: colors.gray.$700,
							}}
							_light={{
								bgColor: colors.gray.$300,
							}}
						>
							<Image src={GithubIcon} alt='Github icon' />
							<span>GitHub</span>
						</Button>
					</a>
				</Flex>
			</Flex>
			<Features />
		</main>
	)
}
