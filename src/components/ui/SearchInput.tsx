import { useRef } from "react";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";

interface Props {
  onSearch: (searchInput: string) => void;
}

const SearchInput = ({ onSearch }: Props) => {
  const ref = useRef<HTMLInputElement>(null);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (ref.current) onSearch(ref.current.value);
      }}
      style={{ width: "100%" }}
    >
      <InputGroup>
        <InputLeftElement pointerEvents="none">
          <BsSearch color="gray" />
        </InputLeftElement>
        <Input
          ref={ref}
          borderRadius="full"
          placeholder="Search games..."
          variant="filled"
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
