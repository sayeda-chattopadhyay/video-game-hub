import useGames from "../hooks/useGames";
import { Text, SimpleGrid } from "@chakra-ui/react";
import GameCard from "./GameCard";
import LoadingSkeleton from "./LoadingSkeleton";
import CardContainer from "./cardContainer";
import { Genre } from "../hooks/useGenres";
import { Platform } from "../hooks/usePlatform";

const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9];

interface Props {
  selectedGenre: Genre | null;
  selectedPlatform: Platform | null;
}

const GameList = ({ selectedGenre, selectedPlatform }: Props) => {
  const { data, error, isLoading } = useGames(selectedGenre, selectedPlatform);
  return (
    <>
      {/* if there is any error */}
      {error && <Text> {error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 3 }}
        padding={8}
        spacing={3}
      >
        {isLoading &&
          skeletons.map((skeleton) => (
            <CardContainer key={skeleton}>
              <LoadingSkeleton />
            </CardContainer>
          ))}

        {data.map((game) => (
          <CardContainer key={game.id}>
            <GameCard game={game} />
          </CardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameList;
