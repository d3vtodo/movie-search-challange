import Movies from './components/Movies'
import { useMovies } from './hooks/useMovies'
import { useSearch } from './hooks/useSearch'
import './App.css'
import { FormEvent } from 'react'

function App() {
  const { search, updateSearch, searchError } = useSearch()
  const { movies, getMovies, loading } = useMovies({ search })

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    getMovies()
  }

  return (
    <div className="page">
      <header>
        <h1 style={{ textAlign: 'center' }}>Movie Search</h1>
        <form className="form" onSubmit={handleSubmit}>
          <div>
            <input
              placeholder="Avengers, The Matrix, Imitation Game..."
              value={search}
              onChange={(e) => updateSearch(e.target.value)}
            />
            {searchError && <p className="search-error">{searchError}</p>}
          </div>
          <button type="submit">Search</button>
        </form>
      </header>

      <main>{loading ? <p>Loading...</p> : <Movies movies={movies} />}</main>
    </div>
  )
}

export default App
