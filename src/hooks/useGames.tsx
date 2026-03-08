import useData from "./useData";
import { Game } from "../types/game";
import { GameQuery } from "../context/GameQueryContext";

// Simple (non-paginated) game list — used by GameSection on the home page.
// For the full /games browser use useInfiniteGames instead.
const useGames = (gameQuery: GameQuery) =>
  useData<Game>("/games", {
    params: {
      genres: gameQuery.genre?.id,
      platforms: gameQuery.platform?.id,
      ordering: gameQuery.sortOrder,
      search: gameQuery.searchInput,
    },
  });

export default useGames;
