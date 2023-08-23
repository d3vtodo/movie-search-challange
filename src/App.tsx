import Movies from './components/Movies'
import { useMovies } from './hooks/useMovies'
import { useSearch } from './hooks/useSearch'
import './App.css'
import { FormEvent } from 'react'

function App() {
  const { search, updateSearch, searchError } = useSearch()
  const { movies, getMovies } = useMovies({ search })

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    getMovies()
  }

  return (
    <div className="page">
      <header>
        <h1>Movie Search</h1>
        <form className="form" onSubmit={handleSubmit}>
          <input
            name="query"
            placeholder="Avengers, The Matrix, Imitation Game..."
            value={search}
            onChange={(e) => updateSearch(e.target.value)}
          />
          <button type="submit">Search</button>
        </form>
        {searchError && <p style={{ color: 'red' }}>{searchError}</p>}
      </header>

      <main>
        <Movies movies={movies} />
      </main>
    </div>
  )
}

export default App
