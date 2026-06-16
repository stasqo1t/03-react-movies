import axios from "axios";
import type { Movie } from "../types/movie";

const TOKEN = import.meta.env.VITE_TMDB_TOKEN;
const BASE_URL = "https://api.themoviedb.org/3";

interface MoviesResponse{
    results: Movie[];
}

export async function fetchMovies(query: string): Promise<Movie[]> {
    const response = await axios.get<MoviesResponse>(
        `${BASE_URL}/search/movie`,
        {
            params: {
                query,
                language: "en-US",
                page: 1,
            },
            headers: {
              Authorization: `Bearer ${TOKEN}`,
            }
          }
          
    )

    return response.data.results
    
}