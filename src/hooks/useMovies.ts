import WITH_RESULTS from '../mocks/with-results.json'

export function useMovies() {
  const movies = WITH_RESULTS.Search

  const mappedMovies = movies.map((movie) => ({
    id: movie.imdbID,
    poster: movie.Poster,
    year: movie.Year,
    title: movie.Title
  }))

  return { movies: mappedMovies }
}
