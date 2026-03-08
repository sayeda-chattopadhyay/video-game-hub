import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";
import { Screenshot } from "../types/game";

interface FetchResponse<T> {
  count: number;
  results: T[];
}

// Fetches the screenshot gallery for a single game.
// Used on the GameDetailPage alongside useGame.
const useGameScreenshots = (gameId: number) =>
  useQuery<FetchResponse<Screenshot>, Error>({
    queryKey: ["screenshots", gameId],
    queryFn: () =>
      apiClient
        .get<FetchResponse<Screenshot>>(`/games/${gameId}/screenshots`)
        .then((res) => res.data),
    enabled: gameId > 0,
  });

export default useGameScreenshots;
