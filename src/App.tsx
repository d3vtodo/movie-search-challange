import { useEffect, useState } from 'react'
import { Movie } from './types'
import WITH_RESULTS from './mocks/with-results.json'
import './App.css'

function App() {
  const movies = WITH_RESULTS.Search
  const hasMovies = movies.length > 0
  const [searchInput, setSearchInput] = useState<string | undefined>('')
  const [moviesResult, setMoviesResult] = useState<Movie[]>([])

  useEffect(() => {
    // fetch(`https://www.omdbapi.com/?apikey=b5064bd3&s=${searchInput}`)
    //   .then(async (res) => await res.json())
    //   .then((res) => setMoviesResult(res))
    //   .catch((err) => console.error(err))
  }, [searchInput])

  return (
    <div className="page">
      <header>
        <h1>Movie Search</h1>
        <form className="form">
          <input
            placeholder="Avengers, The Matrix, Imitation Game..."
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <button type="submit">Search</button>
        </form>
      </header>

      <main>
        {hasMovies ? (
          <ul>
            {movies.map((movie) => {
              return (
                <li key={movie.imdbID}>
                  <h3>{movie.Title}</h3>
                  <p>{movie.Year}</p>
                  <img src={movie.Poster} alt={movie.Title} />
                </li>
              )
            })}
          </ul>
        ) : (
          <p>No results</p>
        )}
      </main>
    </div>
  )
}

export default App
