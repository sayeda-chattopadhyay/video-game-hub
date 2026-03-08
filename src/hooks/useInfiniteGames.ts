import { useInfiniteQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";
import { Game } from "../types/game";
import { GameQuery } from "../context/GameQueryContext";

interface FetchGamesResponse {
  count: number;
  next: string | null;
  results: Game[];
}

// Paginated game list using React Query's useInfiniteQuery.
// Powers the /games page with a "Load More" button.
// Re-fetches automatically whenever gameQuery changes (query key includes it).
const useInfiniteGames = (gameQuery: GameQuery) =>
  useInfiniteQuery<FetchGamesResponse, Error>({
    queryKey: ["games", gameQuery],
    queryFn: ({ pageParam = 1 }) =>
      apiClient
        .get<FetchGamesResponse>("/games", {
          params: {
            genres: gameQuery.genre?.id,
            platforms: gameQuery.platform?.id,
            ordering: gameQuery.sortOrder,
            search: gameQuery.searchInput,
            page: pageParam,
          },
        })
        .then((res) => res.data),
    getNextPageParam: (lastPage, allPages) =>
      lastPage.next ? allPages.length + 1 : undefined,
  });

export default useInfiniteGames;
