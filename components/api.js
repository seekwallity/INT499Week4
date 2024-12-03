import axios from "axios";

const API_KEY = "82e66ab93ebbec18a31414d3fc2fc506";
const BASE_URL = "https://api.themoviedb.org/3";

export const searchMovies = async (query) => {
  const response = await axios.get(`${BASE_URL}/search/movie`, {
    params: { api_key: API_KEY, query },
  });
  return response.data.results;
};