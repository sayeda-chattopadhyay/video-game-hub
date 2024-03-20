import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";

const ModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <HStack spacing="10px">
      <Switch
        colorScheme="teal"
        isChecked={colorMode === "dark"} // initial value
        onChange={toggleColorMode}
      />
      <Text whiteSpace={"nowrap"} fontSize="sm">Change Mode</Text>
    </HStack>
  );
};

export default ModeSwitch;
