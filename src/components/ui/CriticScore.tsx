import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  const color = score > 90 ? "yellow" : score > 80 ? "green" : "red";

  return (
    <Badge colorScheme={color} fontSize="14px" paddingX="6px" borderRadius="4px">
      {score}
    </Badge>
  );
};

export default CriticScore;
