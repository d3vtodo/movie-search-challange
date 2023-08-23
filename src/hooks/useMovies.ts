import { useState } from 'react'
import { MMovie } from '../types'
import { searchMovies } from '../services/movies'

type useMoviesProps = {
  search: string
}

export function useMovies({ search }: useMoviesProps) {
  const [movies, setMovies] = useState<MMovie[]>([])

  const getMovies = async () => {
    if (search) {
      const newMovies = await searchMovies({ search })
      setMovies(newMovies)
    } else {
      setMovies([])
    }
  }

  return { movies, getMovies }
}
