import { useRef, useState } from 'react'
import { MMovie } from '../types'
import { searchMovies } from '../services/movies'

type useMoviesProps = {
  search: string
}

export function useMovies({ search }: useMoviesProps) {
  const [movies, setMovies] = useState<MMovie[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const previousSearch = useRef(search)

  const getMovies = async () => {
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
  }

  return { movies, getMovies, loading, error }
}
