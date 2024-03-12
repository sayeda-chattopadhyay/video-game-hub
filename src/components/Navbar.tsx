import { HStack, Image, Text } from "@chakra-ui/react";
import ModeSwitch from "./ModeSwich";
import logo from "../assets/logo.svg";

const Navbar = () => {
  return (
    <HStack justifyContent={"space-between"} padding={ "20px"}>
      <Image src={logo} boxSize="60px" />
      <ModeSwitch />
    </HStack>
  );
};

export default Navbar;
