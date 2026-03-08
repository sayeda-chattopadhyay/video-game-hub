import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Game } from "../../types/game";
import PlatformIconList from "../ui/PlatformIconList";
import CriticScore from "../ui/CriticScore";
import Emoji from "../ui/Emoji";
import getCroppedImg from "../../services/image-url";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => (
  <Link to={`/games/${game.id}`}>
    <Card
      borderRadius={10}
      overflow="hidden"
      _hover={{ transform: "scale(1.02)", transition: "transform 0.2s ease" }}
      cursor="pointer"
      h="100%"
    >
      <Image
        src={getCroppedImg(game.background_image)}
        alt={game.name}
        objectFit="cover"
        h="180px"
        w="100%"
      />
      <CardBody>
        <Heading size="sm" mb={1}>
          {game.name}
        </Heading>
        <Emoji rating={game.rating_top} />
        <HStack justifyContent="space-between" mt={2}>
          <PlatformIconList
            platforms={game.parent_platforms?.map((p) => p.platform) ?? []}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
      </CardBody>
    </Card>
  </Link>
);

export default GameCard;
