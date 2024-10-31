export const ImportCode = `import { Textarea } from "@merely-ui/react"`

export const ControlledUsageCode = `import { useState } from "react"
import { Textarea } from "@merely-ui/react"

export default function MyTextarea() {
  const [value, setValue] = useState("")

  return (
    <Card>
      <Textarea value={value} onChange={setValue} />
    </Card>
  )
}`

export const SizesCode = `<Flex alignItems='center'>
	<Textarea _size='s' />
	<Textarea _size='m' />
	<Textarea _size='l' />
</Flex>`
