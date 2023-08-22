import Movies from './components/Movies'
import { useMovies } from './hooks/useMovies'
import { useSearch } from './hooks/useSearch'
import './App.css'

function App() {
  const { movies } = useMovies()
  const { search, updateSearch, searchError } = useSearch()

  return (
    <div className="page">
      <header>
        <h1>Movie Search</h1>
        <form className="form">
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
