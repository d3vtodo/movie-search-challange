import { useEffect, useState } from 'react'
import './App.css'
import Movies from './components/Movies'
import { useMovies } from './hooks/useMovies'

function App() {
  const { movies } = useMovies()
  const [searchInput, setSearchInput] = useState<string | undefined>('')

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
        <Movies movies={movies} />
      </main>
    </div>
  )
}

export default App
