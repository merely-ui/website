export const ImportCode = `import { Switch } from "@merely-ui/react"`

export const ControlledUsageCode = `import { useState } from "react"
import { Switch } from "@merely-ui/react"

export default function MyTextarea() {
  const [active, setActive] = useState(false)

  return (
    <Card>
      <Switch 
        toggled={active} 
        onToggle={() => setActive(prev => !prev)}
      />
    </Card>
  )
}`

export const SizesCode = `<Flex>
	<Switch _size='s' />
	<Switch _size='m' />
	<Switch _size='l' />
</Flex>`

export const ActiveBgCode = `<Card>
  <Switch activeBgColor={colors.purple.$300} />
</Card>`

export const UsageCode = `<Flex>
	<Switch />
	<Switch toggled />
	<Switch />
</Flex>`
