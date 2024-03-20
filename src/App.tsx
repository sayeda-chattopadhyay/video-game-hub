import { Grid, GridItem, Show, HStack } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import GameList from "./components/GameList";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformMenu from "./components/PlatformMenu";
import { Platform } from "./hooks/usePlatform";
import SortGame from "./components/SortGame";

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
        <HStack paddingLeft={5} marginBottom={5} spacing={5}>
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
        <GameList gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
