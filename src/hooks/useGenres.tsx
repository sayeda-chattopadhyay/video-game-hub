import useData from "./useData";
import { Genre } from "../types/genre";

const useGenres = () => useData<Genre>("/genres");

export default useGenres;
