import useGames from "../hooks/useGames";
import { Text, SimpleGrid } from "@chakra-ui/react";
import GameCard from "./GameCard";
import LoadingSkeleton from "./LoadingSkeleton";
import CardContainer from "./cardContainer";

const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const GameList = () => {
  const { games, error, isLoading } = useGames();
  return (
    <>
      {error && <Text> {error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 3 }}
        padding="10px"
        spacing={10}
      >
        {isLoading &&
          skeletons.map((skeleton) => (
            <CardContainer>
              <LoadingSkeleton key={skeleton} />
            </CardContainer>
          ))}
        {games.map((game) => (
          <CardContainer>
            <GameCard key={game.id} game={game} />
          </CardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameList;
