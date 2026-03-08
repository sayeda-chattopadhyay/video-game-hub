import { Flex, Image, Button, IconButton, HStack, useColorMode } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { BsMoon, BsSun } from "react-icons/bs";
import SearchInput from "../ui/SearchInput";
import logo from "../../assets/logo.svg";
import { useGameQuery } from "../../context/GameQueryContext";

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { gameQuery, setGameQuery } = useGameQuery();
  const navigate = useNavigate();

  const handleSearch = (searchInput: string) => {
    setGameQuery({ ...gameQuery, searchInput });
    navigate("/games");
  };

  return (
    <Flex
      as="header"
      align="center"
      gap={4}
      px={{ base: 4, md: 8 }}
      py={4}
      borderBottomWidth="1px"
      borderColor="gray.700"
      position="sticky"
      top={0}
      zIndex={10}
      backdropFilter="blur(10px)"
      bg="gray.900"
    >
      <Link to="/">
        <Image src={logo} boxSize="48px" flexShrink={0} />
      </Link>

      <Flex flex={1} maxW="600px">
        <SearchInput onSearch={handleSearch} />
      </Flex>

      <HStack spacing={2} ml="auto">
        <Link to="/">
          <Button variant="ghost" size="sm">
            Home
          </Button>
        </Link>
        <Link to="/games">
          <Button variant="ghost" size="sm">
            Games
          </Button>
        </Link>
        <IconButton
          aria-label="Toggle color mode"
          icon={colorMode === "dark" ? <BsSun /> : <BsMoon />}
          onClick={toggleColorMode}
          variant="ghost"
          size="sm"
        />
      </HStack>
    </Flex>
  );
};

export default Header;
