import { useCallback, useMemo, useRef, useState } from 'react'
import { MMovie } from '../types'
import { searchMovies } from '../services/movies'

type useMoviesProps = {
  search: string
  sort: boolean
}

export function useMovies({ search, sort }: useMoviesProps) {
  const [movies, setMovies] = useState<MMovie[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const previousSearch = useRef(search)

  const getMovies = useCallback(async (search: string) => {
    if (previousSearch.current === search) return
    try {
      setLoading(true)
      previousSearch.current = search
      const newMovies = await searchMovies({ search })
      setMovies(newMovies)
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message)
      } else {
        console.log('An unexpected error occurred')
      }
    } finally {
      setLoading(false)
    }
  }, [])

  const sortedMovies = useMemo(() => {
    return sort
      ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
      : movies
  }, [sort, movies])

  return { movies: sortedMovies, getMovies, loading, error }
}
