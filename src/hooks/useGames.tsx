import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

interface FetchGameResponse {
  count: number;
  results: Game[];
}

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    const fetchGames = async () => {
      try {
        const response = await apiClient.get<FetchGameResponse>("/games", {
          signal: controller.signal,
        });
        setGames(response.data.results);
      } catch (error: any) {
        if (error instanceof CanceledError) return;
        setError(error.message);
      }
    };
    fetchGames();

    return () => {
      controller.abort();
    };
  }, []);

  return { games, error };
};

export default useGames;
