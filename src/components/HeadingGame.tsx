import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
}

const HeadingGame = ({ gameQuery }: Props) => {
  const heading = `${gameQuery.genre?.name || ""} 
  ${gameQuery.platform?.name || ""} ${gameQuery.searchInput || ""} Game`;

  return <Heading as="h1" marginY={5} fontSize={"5xl"}>{heading}</Heading>;
};

export default HeadingGame;
