import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";
import { GameDetail } from "../types/game";

// Fetches full detail for a single game by ID.
// Used on the GameDetailPage (/games/:id).
const useGame = (id: number) =>
  useQuery<GameDetail, Error>({
    queryKey: ["game", id],
    queryFn: () =>
      apiClient.get<GameDetail>(`/games/${id}`).then((res) => res.data),
    enabled: id > 0,
  });

export default useGame;
