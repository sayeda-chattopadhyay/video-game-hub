import { Game } from "../hooks/useGames";
import { Badge } from "@chakra-ui/react";

interface Props {
  Score: number;
}

const CriticScore = ({ Score }: Props) => {
  let color = Score > 90 ? "yellow" : Score > 80 ? "green" : "red";

  return (
    <Badge
      colorScheme={color}
      fontSize={"16px"}
      paddingX="4px"
      borderRadius="4px"
    >
      {Score}
    </Badge>
  );
};

export default CriticScore;
