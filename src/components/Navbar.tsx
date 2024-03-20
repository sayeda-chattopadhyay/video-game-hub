import { HStack, Image, Text } from "@chakra-ui/react";
import ModeSwitch from "./ModeSwich";
import logo from "../assets/logo.svg";
import SearchInput from "./SearchInput";

const Navbar = () => {
  return (
    <HStack padding={"20px"}>
      <Image src={logo} boxSize="60px" />
      <SearchInput />
      <ModeSwitch />
    </HStack>
  );
};

export default Navbar;
