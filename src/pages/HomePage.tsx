import { Box, Heading, Text, VStack, Button, Flex } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import SearchInput from "../components/ui/SearchInput";
import GameSection from "../components/game/GameSection";
import AboutSection from "../components/ui/AboutSection";
import { useGameQuery } from "../context/GameQueryContext";

const HomePage = () => {
  const { gameQuery, setGameQuery } = useGameQuery();
  const navigate = useNavigate();

  const handleHeroSearch = (searchInput: string) => {
    setGameQuery({ ...gameQuery, searchInput });
    navigate("/games");
  };

  return (
    <Box>
      {/* ── Hero ─────────────────────────────────────────── */}
      <Flex
        direction="column"
        align="center"
        justify="center"
        textAlign="center"
        px={{ base: 6, md: 12 }}
        py={{ base: 16, md: 24 }}
        bgGradient="linear(to-br, gray.900, blue.900, gray.900)"
        minH="60vh"
      >
        <VStack spacing={6} maxW="700px">
          <Heading
            as="h1"
            size="2xl"
            lineHeight="shorter"
            bgGradient="linear(to-r, blue.300, purple.400)"
            bgClip="text"
          >
            Discover Your Next Favorite Game
          </Heading>
          <Text color="gray.400" fontSize="lg">
            Browse thousands of games across every platform, genre, and era.
          </Text>
          <Box w="100%">
            <SearchInput onSearch={handleHeroSearch} />
          </Box>
          <Link to="/games">
            <Button colorScheme="blue" size="lg" px={10}>
              Browse All Games
            </Button>
          </Link>
        </VStack>
      </Flex>

      {/* ── Game sections ────────────────────────────────── */}
      <Box px={{ base: 4, md: 8 }} py={12}>
        <GameSection title="Trending Now" ordering="-added" />
        <GameSection title="Top Rated" ordering="-metacritic" />
        <GameSection title="New Releases" ordering="-released" />
      </Box>

      {/* ── About / Contact ──────────────────────────────── */}
      <AboutSection />
    </Box>
  );
};

export default HomePage;
