import { Menu, Button, Portal } from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'



const PlatformSelector = () => {
  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button variant="outline" size="sm" marginX={"12px"} borderRadius={"7px"}>
          Platform <BsChevronDown />
        </Button> 
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            <Menu.Item value="windows">PC (Windows)</Menu.Item>
            <Menu.Item value="browser">Web Browser</Menu.Item>
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  )
}

export default PlatformSelector