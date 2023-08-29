import { useEffect, useRef, useState } from 'react'

export function useSearch() {
  const [search, updateSearch] = useState('')
  const [searchError, setSearchError] = useState<string | null>(null)
  const isFirstInput = useRef(true)

  useEffect(() => {
    if (isFirstInput.current) {
      isFirstInput.current = search === ''
      return
    }

    if (search === '') {
      setSearchError(`Can't find empty movie`)
      return
    }

    if (search.length < 3) {
      setSearchError('Search must be minimum 3')
      return
    }

    setSearchError(null)
  }, [search])

  return { search, updateSearch, searchError }
}
