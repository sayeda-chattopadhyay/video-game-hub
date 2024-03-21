import useGames from "../hooks/useGames";
import { Text, SimpleGrid } from "@chakra-ui/react";
import GameCard from "./GameCard";
import LoadingSkeleton from "./LoadingSkeleton";
//import CardContainer from "./CardContainer";
import GameContainer from "./GameContainer";
// import { Genre } from "../hooks/useGenres";
// import { Platform } from "../hooks/usePlatform";
import { GameQuery } from "../App";

const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9];

interface Props {
  gameQuery: GameQuery;
}

const GameList = ({ gameQuery }: Props) => {
  const { data, error, isLoading } = useGames(gameQuery);

  if (error) return <Text> {error}</Text>;

  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
      padding={8}
      spacing={8}
    >
      {isLoading &&
        skeletons.map((skeleton) => (
          <GameContainer key={skeleton}>
            <LoadingSkeleton />
          </GameContainer>
        ))}

      {data.map((game) => (
        <GameContainer key={game.id}>
          <GameCard game={game} />
        </GameContainer>
      ))}
    </SimpleGrid>
  );
};

export default GameList;
