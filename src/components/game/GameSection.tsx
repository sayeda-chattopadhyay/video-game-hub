import { Box, Heading, SimpleGrid, Flex, Button, Spinner } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import useData from "../../hooks/useData";
import { Game } from "../../types/game";
import GameCard from "./GameCard";

interface Props {
  title: string;
  // RAWG ordering param e.g. "-metacritic", "-added", "-released"
  ordering: string;
}

// Renders a titled section of 6 games for the home page.
// Each section uses a different ordering to highlight different lists.
const GameSection = ({ title, ordering }: Props) => {
  const { data, isLoading, error } = useData<Game>("/games", {
    params: { ordering, page_size: 6 },
  });

  if (error) return null;

  return (
    <Box mb={14}>
      <Flex justify="space-between" align="center" mb={5}>
        <Heading size="lg">{title}</Heading>
        <Link to="/games">
          <Button variant="ghost" colorScheme="blue" size="sm">
            See all →
          </Button>
        </Link>
      </Flex>

      {isLoading ? (
        <Flex justify="center" py={8}>
          <Spinner size="lg" />
        </Flex>
      ) : (
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={5}>
          {data.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </SimpleGrid>
      )}
    </Box>
  );
};

export default GameSection;
