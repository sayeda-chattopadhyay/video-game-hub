import useData from "./useData";
import { Platform } from "../types/platform";

const usePlatform = () => useData<Platform>("/platforms/lists/parents");

export default usePlatform;
