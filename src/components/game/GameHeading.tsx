import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../../context/GameQueryContext";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const parts = [
    gameQuery.genre?.name,
    gameQuery.platform?.name,
    gameQuery.searchInput,
  ]
    .filter(Boolean)
    .join(" · ");

  const heading = parts ? `${parts} Games` : "All Games";

  return (
    <Heading as="h1" mb={4} fontSize={{ base: "3xl", md: "4xl" }}>
      {heading}
    </Heading>
  );
};

export default GameHeading;
