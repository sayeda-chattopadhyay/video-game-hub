import { Game } from "../hooks/useGames";
import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import PlatformIconList from "./platformIconList";
import CriticScore from "./CriticScore";
import getCroppedImg from "../services/image-url";
import Emoji from "./Emoji";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card>
      <Image src={getCroppedImg(game.background_image)} alt={game.name} />
      <CardBody>
        <Heading size="md">{game.name}</Heading>
        <Emoji rating={game.rating_top}/>
        <HStack justifyContent="space-between">
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore Score={game.metacritic} />
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCard;

