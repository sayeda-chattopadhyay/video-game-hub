import useData from "./useData";

export interface Genre {
  id: Number;
  name: string;
}

const useGenres = () => useData<Genre>("/genres");

export default useGenres;
