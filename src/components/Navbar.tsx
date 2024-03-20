import { HStack, Image, Text } from "@chakra-ui/react";
import ModeSwitch from "./ModeSwich";
import logo from "../assets/logo.svg";
import SearchInput from "./SearchInput";

interface Props {
  onSearch: (searchInput: string) => void;
}

const Navbar = ({ onSearch }: Props) => {
  return (
    <HStack padding={"20px"}>
      <Image src={logo} boxSize="60px" />
      <SearchInput onSearch={onSearch} />
      <ModeSwitch />
    </HStack>
  );
};

export default Navbar;
