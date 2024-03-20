import { Button, Menu, MenuList, MenuButton, MenuItem } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

const SortGame = () => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {"Sort game"}
      </MenuButton>
      <MenuList>
        <MenuItem>Relevance</MenuItem>
        <MenuItem>Date added</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default SortGame;
