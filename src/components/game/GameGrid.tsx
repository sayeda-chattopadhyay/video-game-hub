import { SimpleGrid, Text, Button, Flex, Box } from "@chakra-ui/react";
import { GameQuery } from "../../context/GameQueryContext";
import useInfiniteGames from "../../hooks/useInfiniteGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "../ui/GameCardSkeleton";

const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

interface Props {
  gameQuery: GameQuery;
}

// Full paginated game browser with infinite scroll via "Load More".
// Powered by useInfiniteQuery — each click fetches the next page and
// appends it to the existing list without losing scroll position.
const GameGrid = ({ gameQuery }: Props) => {
  const {
    data,
    error,
    isLoading,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteGames(gameQuery);

  if (error) return <Text color="red.400">{error.message}</Text>;

  const games = data?.pages.flatMap((page) => page.results) ?? [];

  return (
    <Box>
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={5}>
        {isLoading &&
          skeletons.map((s) => <GameCardSkeleton key={s} />)}
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>

      {hasNextPage && (
        <Flex justify="center" mt={10}>
          <Button
            onClick={() => fetchNextPage()}
            isLoading={isFetchingNextPage}
            loadingText="Loading..."
            colorScheme="blue"
            variant="outline"
            size="lg"
          >
            Load More
          </Button>
        </Flex>
      )}
    </Box>
  );
};

export default GameGrid;
