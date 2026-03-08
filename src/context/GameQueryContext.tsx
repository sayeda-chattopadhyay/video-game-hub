import { createContext, useContext, useState, ReactNode } from "react";
import { Genre } from "../types/genre";
import { Platform } from "../types/platform";

// The shape of all active filters / search state.
// Centralised here so any component can read or update it
// without props being drilled through the tree.
export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  searchInput: string;
}

interface GameQueryContextType {
  gameQuery: GameQuery;
  setGameQuery: (query: GameQuery) => void;
}

const GameQueryContext = createContext<GameQueryContextType>(
  {} as GameQueryContextType
);

export const GameQueryProvider = ({ children }: { children: ReactNode }) => {
  const [gameQuery, setGameQuery] = useState<GameQuery>({
    genre: null,
    platform: null,
    sortOrder: "",
    searchInput: "",
  });

  return (
    <GameQueryContext.Provider value={{ gameQuery, setGameQuery }}>
      {children}
    </GameQueryContext.Provider>
  );
};

export const useGameQuery = () => useContext(GameQueryContext);
