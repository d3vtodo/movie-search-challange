import debounce from 'just-debounce-it'
import Movies from './components/Movies'
import { useMovies } from './hooks/useMovies'
import { useSearch } from './hooks/useSearch'
import './App.css'
import { ChangeEvent, useState, useCallback } from 'react'

function App() {
  const [sort, setSort] = useState(false)
  const { search, updateSearch, searchError } = useSearch()
  const { movies, getMovies, loading } = useMovies({ search, sort })
  const debouncedGetMovies = useCallback(
    debounce((search: string) => {
      getMovies(search)
    }, 300),
    [getMovies]
  )

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newSearch = event.target.value
    updateSearch(newSearch)
    debouncedGetMovies(newSearch)
  }

  return (
    <div className="page">
      <header>
        <h1 style={{ textAlign: 'center' }}>Movie Search</h1>
        <form className="form">
          <div>
            <input
              placeholder="Avengers, The Matrix, Imitation Game..."
              value={search}
              onChange={(e) => handleOnChange(e)}
            />
            <input
              type="checkbox"
              onChange={(e) => setSort(e.target.checked)}
            />
            <label>Sort by title</label>
            {searchError && <p className="search-error">{searchError}</p>}
          </div>
        </form>
      </header>

      <main>{loading ? <p>Loading...</p> : <Movies movies={movies} />}</main>
    </div>
  )
}

export default App
