import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface Genre {
  id: Number;
  name: string;
}

interface FetchGenresResponse {
  count: number;
  results: Genre[];
}

const useGenres = () => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    const fetchGames = async () => {
      try {
        setLoading(true);
        const response = await apiClient.get<FetchGenresResponse>("/genres", {
          signal: controller.signal,
        });
        setGenres(response.data.results);
        setLoading(false);
      } catch (error: any) {
        if (error instanceof CanceledError) return;
        setError(error.message);
        setLoading(false);
      }
    };
    fetchGames();

    return () => {
      controller.abort();
    };
  }, []);

  return { genres, error, isLoading };
};

export default useGenres;
