export const ImportCode = `import { Input } from "@merely-ui/react"`

export const SizesCode = `<Flex alignItems='flex-start' flexDir='column'>
	<Input placeholder='The smallest' _size='xs' />
	<Input placeholder='Smaller' _size='s' />
	<Input placeholder='Normal' _size='m' />
	<Input placeholder='Bigger' _size='l' />
	<Input placeholder='The biggest' _size='xl' />
</Flex>`

export const PlaceholderCode = `<Flex flexDir='column'>
	<Input placeholder='Default placeholder' />
	<Input
		placeholder='Default placeholder'
		_placeholder={{
			color: 'red',
		}}
	/>
</Flex>`
