import { MMovie, MovieResponse } from '../types'

const API_KEY = 'b5064bd3'

interface SearchMoviesProps {
  search: string
}

export async function searchMovies({
  search
}: SearchMoviesProps): Promise<MMovie[]> {
  if (!search) return []
  if (search) {
    try {
      const response = await fetch(
        `https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}`
      )
      const json = (await response.json()) as MovieResponse

      if (json.Error) return []

      return json?.Search.map((movie) => ({
        id: movie.imdbID,
        poster: movie.Poster,
        year: movie.Year,
        title: movie.Title,
        type: movie.Type
      }))
    } catch (error) {
      console.error(error)
    }
  }
  return []
}
