import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { Text } from "@chakra-ui/react";

interface Game {
  id: number;
  name: string;
}

interface FetchGameResponse {
  count: number;
  results: Game[];
}

const GameList = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await apiClient.get<FetchGameResponse>("/games");
        setGames(response.data.results);
      } catch (error) {
        setError("An error occurred while fetching games");
      }
    };
    fetchGames();
  });

  return (
    <>
      {error && <Text> {error}</Text>}
      <ul>
        {games.map((game) => (
          <li key={game.id}> {game.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GameList;
