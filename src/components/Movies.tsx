import { MMovie } from '../types'

type MoviesProps = {
  movies: MMovie[]
}

function MoviesList({ movies }: MoviesProps) {
  return (
    <ul className="movies">
      {movies.map((movie) => {
        return (
          <li className="movie" key={movie.id}>
            <h3>{movie.title}</h3>
            <p>{movie.year}</p>
            <img src={movie.poster} alt={movie.title} />
          </li>
        )
      })}
    </ul>
  )
}

export function NoResults() {
  return <p>No movies found</p>
}

export default function Movies({ movies }: MoviesProps) {
  const hasMovies = movies.length > 0

  return hasMovies ? <MoviesList movies={movies} /> : <NoResults />
}
