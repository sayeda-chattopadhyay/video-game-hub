import { Grid, GridItem, Show, HStack, Box } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import GameList from "./components/GameList";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformMenu from "./components/PlatformMenu";
import { Platform } from "./hooks/usePlatform";
import SortGame from "./components/SortGame";
import HeadingGame from "./components/HeadingGame";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  searchInput: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "300px, 1fr",
      }}
    >
      <GridItem area="nav">
        <Navbar
          onSearch={(searchInput) =>
            setGameQuery({ ...gameQuery, searchInput })
          }
        />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" padding={5}>
          <GenreList
            selectedGenre={gameQuery.genre}
            onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
          />
        </GridItem>
      </Show>
      <GridItem area="main">
        <Box paddingLeft={5}>
          <HeadingGame gameQuery={gameQuery}/>
          <HStack  marginBottom={5} spacing={6}>
            <PlatformMenu
              selectedPlatform={gameQuery.platform}
              onSelectPlatform={(platform) =>
                setGameQuery({ ...gameQuery, platform })
              }
            />
            <SortGame
              sortOrder={gameQuery.sortOrder}
              onSelectSortOrder={(sortOrder) =>
                setGameQuery({ ...gameQuery, sortOrder })
              }
            />
          </HStack>
        </Box>
        <GameList gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
