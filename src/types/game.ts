import { Platform } from "./platform";
import { Genre } from "./genre";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

export interface Publisher {
  id: number;
  name: string;
}

export interface EsrbRating {
  id: number;
  name: string;
}

export interface GameDetail extends Game {
  description_raw: string;
  genres: Genre[];
  website: string;
  publishers: Publisher[];
  esrb_rating: EsrbRating | null;
  released: string;
  developers: { id: number; name: string }[];
}

export interface Screenshot {
  id: number;
  image: string;
}
