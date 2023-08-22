import WITH_RESULTS from '../mocks/with-results.json'

export function useMovies() {
  const movies = WITH_RESULTS.Search

  // fetch(`https://www.omdbapi.com/?apikey=b5064bd3&s=${searchInput}`)
  //   .then(async (res) => await res.json())
  //   .then((res) => setMoviesResult(res))
  //   .catch((err) => console.error(err))

  const mappedMovies = movies.map((movie) => ({
    id: movie.imdbID,
    poster: movie.Poster,
    year: movie.Year,
    title: movie.Title
  }))

  return { movies: mappedMovies }
}
