import { useParams } from "react-router-dom";
import {
  Box,
  Heading,
  Text,
  Badge,
  HStack,
  VStack,
  Image,
  SimpleGrid,
  Spinner,
  Center,
  Flex,
  Tag,
  Divider,
} from "@chakra-ui/react";
import useGame from "../hooks/useGame";
import useGameScreenshots from "../hooks/useGameScreenshots";
import getCroppedImg from "../services/image-url";
import PlatformIconList from "../components/ui/PlatformIconList";
import CriticScore from "../components/ui/CriticScore";
import Emoji from "../components/ui/Emoji";

const GameDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const gameId = parseInt(id ?? "0");

  const { data: game, isLoading, error } = useGame(gameId);
  const { data: screenshotData } = useGameScreenshots(gameId);

  if (isLoading)
    return (
      <Center py={32}>
        <Spinner size="xl" />
      </Center>
    );

  if (error || !game)
    return (
      <Center py={32}>
        <Text color="red.400">Failed to load game details.</Text>
      </Center>
    );

  return (
    <Box>
      {/* ── Hero image ───────────────────────────────────── */}
      <Box position="relative" h={{ base: "260px", md: "460px" }} overflow="hidden">
        <Image
          src={getCroppedImg(game.background_image)}
          alt={game.name}
          w="100%"
          h="100%"
          objectFit="cover"
        />
        {/* Gradient overlay so title is readable */}
        <Box
          position="absolute"
          inset={0}
          bgGradient="linear(to-t, gray.900 20%, transparent)"
        />
      </Box>

      {/* ── Main content ─────────────────────────────────── */}
      <Box px={{ base: 4, md: 10 }} py={8} maxW="1100px" mx="auto">
        {/* Title row */}
        <Flex
          align="flex-start"
          justify="space-between"
          wrap="wrap"
          gap={4}
          mb={6}
        >
          <VStack align="flex-start" spacing={2}>
            <Heading as="h1" size="2xl">
              {game.name}
            </Heading>
            <HStack wrap="wrap">
              <Emoji rating={game.rating_top} />
              {game.esrb_rating && (
                <Badge variant="outline" colorScheme="gray">
                  {game.esrb_rating.name}
                </Badge>
              )}
            </HStack>
          </VStack>
          <CriticScore score={game.metacritic} />
        </Flex>

        {/* Platforms */}
        <Box mb={6}>
          <Text fontSize="sm" color="gray.400" mb={1} fontWeight="semibold">
            PLATFORMS
          </Text>
          <PlatformIconList
            platforms={game.parent_platforms?.map((p) => p.platform) ?? []}
          />
        </Box>

        <Divider mb={6} borderColor="gray.700" />

        {/* Meta grid */}
        <SimpleGrid columns={{ base: 2, md: 4 }} gap={6} mb={8}>
          <Box>
            <Text color="gray.400" fontSize="xs" fontWeight="semibold" mb={1}>
              GENRE
            </Text>
            <HStack wrap="wrap">
              {game.genres?.map((g) => (
                <Tag key={g.id} size="sm">
                  {g.name}
                </Tag>
              ))}
            </HStack>
          </Box>
          <Box>
            <Text color="gray.400" fontSize="xs" fontWeight="semibold" mb={1}>
              RELEASED
            </Text>
            <Text fontWeight="semibold">{game.released ?? "TBA"}</Text>
          </Box>
          <Box>
            <Text color="gray.400" fontSize="xs" fontWeight="semibold" mb={1}>
              DEVELOPER
            </Text>
            <Text fontWeight="semibold">
              {game.developers?.map((d) => d.name).join(", ") || "N/A"}
            </Text>
          </Box>
          <Box>
            <Text color="gray.400" fontSize="xs" fontWeight="semibold" mb={1}>
              PUBLISHER
            </Text>
            <Text fontWeight="semibold">
              {game.publishers?.map((p) => p.name).join(", ") || "N/A"}
            </Text>
          </Box>
        </SimpleGrid>

        {/* Description */}
        {game.description_raw && (
          <Box mb={10}>
            <Heading size="md" mb={3}>
              About
            </Heading>
            <Text color="gray.300" lineHeight="tall" whiteSpace="pre-line">
              {game.description_raw.length > 1000
                ? game.description_raw.slice(0, 1000) + "…"
                : game.description_raw}
            </Text>
          </Box>
        )}

        {/* Screenshots */}
        {screenshotData?.results && screenshotData.results.length > 0 && (
          <Box>
            <Heading size="md" mb={4}>
              Screenshots
            </Heading>
            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={4}>
              {screenshotData.results.map((shot) => (
                <Image
                  key={shot.id}
                  src={shot.image}
                  alt="screenshot"
                  borderRadius={8}
                  objectFit="cover"
                  w="100%"
                  h="180px"
                />
              ))}
            </SimpleGrid>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default GameDetailPage;
