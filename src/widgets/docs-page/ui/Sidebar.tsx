'use client'

import BadgeIcon from '@/src/shared/assets/badge.svg'
import { PACKAGE_VERSION } from '@/src/shared/lib/consts/package-version'
import { Card, Flex, Text } from '@merely-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
	frameworksLinks,
	gettingStartedLinks,
	themeLinks,
	usageLinks,
} from '../model/page-links'

export default function Sidebar() {
	const pathname = usePathname()

	return (
		<div className='hidden lg:block'>
			<Flex pos='sticky' top={125} flexDir='column' gap={16}>
				<Flex alignItems='center' mb={8}>
					<Card
						p={6}
						display='flex'
						justifyContent='center'
						alignItems='center'
					>
						<Image width={20} height={20} src={BadgeIcon} alt='Badge' />
					</Card>

					<Flex flexDir='column' gap={0}>
						<Text fontSize={14} fontWeight={500}>
							Version
						</Text>
						<Text fontSize={14} fontWeight={500} color='#a1a1a1'>
							{PACKAGE_VERSION}
						</Text>
					</Flex>
				</Flex>
				<Flex flexDir='column' gap={8}>
					<Text _size='s' fontSize={15} fontWeight={500}>
						Getting started
					</Text>
					<Flex flexDir='column' ml={12} gap={6}>
						{gettingStartedLinks.map(pageLink => (
							<Link key={pageLink.link} href={pageLink.link}>
								<Text
									_size='s'
									color={
										pathname === pageLink.link ? '#0051FF' : 'hsla(0,0%,63%,1)'
									}
									fontWeight={500}
									transition='color 0.1s linear'
									_hover={{
										color: '#0051FF',
									}}
								>
									{pageLink.text}
								</Text>
							</Link>
						))}
					</Flex>
				</Flex>
				<Flex flexDir='column' gap={8}>
					<Text _size='s' fontSize={15} fontWeight={500}>
						Frameworks
					</Text>
					<Flex flexDir='column' ml={12} gap={6}>
						{frameworksLinks.map(pageLink => (
							<Link key={pageLink.link} href={pageLink.link}>
								<Text
									_size='s'
									color={
										pathname === pageLink.link ? '#0051FF' : 'hsla(0,0%,63%,1)'
									}
									fontWeight={500}
									transition='color 0.1s linear'
									_hover={{
										color: '#0051FF',
									}}
								>
									{pageLink.text}
								</Text>
							</Link>
						))}
					</Flex>
				</Flex>
				<Flex flexDir='column' gap={8}>
					<Text _size='s' fontSize={15} fontWeight={500}>
						Theme
					</Text>
					<Flex flexDir='column' ml={12} gap={6}>
						{themeLinks.map(pageLink => (
							<Link key={pageLink.link} href={pageLink.link}>
								<Text
									_size='s'
									color={
										pathname === pageLink.link ? '#0051FF' : 'hsla(0,0%,63%,1)'
									}
									fontWeight={500}
									transition='color 0.1s linear'
									_hover={{
										color: '#0051FF',
									}}
								>
									{pageLink.text}
								</Text>
							</Link>
						))}
					</Flex>
				</Flex>
				<Flex flexDir='column' gap={8}>
					<Text _size='s' fontSize={15} fontWeight={500}>
						Usage
					</Text>
					<Flex flexDir='column' ml={12} gap={6}>
						{usageLinks.map(pageLink => (
							<Link key={pageLink.link} href={pageLink.link}>
								<Text
									_size='s'
									color={
										pathname === pageLink.link ? '#0051FF' : 'hsla(0,0%,63%,1)'
									}
									fontWeight={500}
									transition='color 0.1s linear'
									_hover={{
										color: '#0051FF',
									}}
								>
									{pageLink.text}
								</Text>
							</Link>
						))}
					</Flex>
				</Flex>
			</Flex>
		</div>
	)
}
