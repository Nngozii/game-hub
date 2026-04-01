import { HStack, Text } from "@chakra-ui/react";
import {
  ColorModeButton,
  useColorMode,
} from "../components/ui/color-mode";

const ColorModeSwitch = () => {
    const { toggleColorMode, colorMode } = useColorMode()
  return (
      <HStack>
        <ColorModeButton />
        <Text>Dark Mode</Text>
      </HStack>
  );
};

export default ColorModeSwitch;
