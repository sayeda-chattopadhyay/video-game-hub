import { Box, Grid, GridItem, Show, HStack } from "@chakra-ui/react";
import { useGameQuery } from "../context/GameQueryContext";
import GenreList from "../components/game/GenreList";
import GameGrid from "../components/game/GameGrid";
import PlatformMenu from "../components/game/PlatformMenu";
import SortMenu from "../components/game/SortMenu";
import GameHeading from "../components/game/GameHeading";

// Full game browser page (/games).
// Reads and writes GameQuery through context — no prop drilling.
const GamesPage = () => {
  const { gameQuery, setGameQuery } = useGameQuery();

  return (
    <Grid
      templateAreas={{
        base: `"main"`,
        lg: `"aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "240px 1fr",
      }}
      gap={0}
    >
      <Show above="lg">
        <GridItem area="aside" px={5} py={8} borderRightWidth="1px" borderColor="gray.700">
          <GenreList
            selectedGenre={gameQuery.genre}
            onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
          />
        </GridItem>
      </Show>

      <GridItem area="main" px={{ base: 4, md: 8 }} py={8}>
        <GameHeading gameQuery={gameQuery} />
        <HStack spacing={3} mb={6} flexWrap="wrap">
          <PlatformMenu
            selectedPlatform={gameQuery.platform}
            onSelectPlatform={(platform) =>
              setGameQuery({ ...gameQuery, platform })
            }
          />
          <SortMenu
            sortOrder={gameQuery.sortOrder}
            onSelectSortOrder={(sortOrder) =>
              setGameQuery({ ...gameQuery, sortOrder })
            }
          />
        </HStack>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
};

export default GamesPage;
