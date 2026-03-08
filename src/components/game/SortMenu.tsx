import { Button, Menu, MenuList, MenuButton, MenuItem } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface SortOption {
  label: string;
  value: string;
}

const sortOptions: SortOption[] = [
  { label: "Relevance", value: "" },
  { label: "Date Added", value: "-added" },
  { label: "Name", value: "name" },
  { label: "Ratings", value: "-rating" },
  { label: "Released", value: "-released" },
  { label: "Popularity", value: "-metacritic" },
];

interface Props {
  onSelectSortOrder: (sortOrder: string) => void;
  sortOrder: string;
}

const SortMenu = ({ onSelectSortOrder, sortOrder }: Props) => {
  const current = sortOptions.find((o) => o.value === sortOrder);

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />} size="sm">
        Sort by: {current?.label ?? "Relevance"}
      </MenuButton>
      <MenuList>
        {sortOptions.map((option) => (
          <MenuItem
            key={option.value}
            onClick={() => onSelectSortOrder(option.value)}
          >
            {option.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortMenu;
