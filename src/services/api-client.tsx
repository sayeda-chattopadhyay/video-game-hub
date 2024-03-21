import axios from "axios";

const apiKey = import.meta.env.VITE_API_KEY;

console.log("apiKey", apiKey);


export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: apiKey,
  },
});
