export interface MovieResponse {
  Search: Movie[]
  totalResults: string
  Response: string
  Error?: string
}

export interface Movie {
  Title: string
  Year: string
  imdbID: string
  Type: string
  Poster: string
}

export interface MMovie {
  title: string
  year: string
  id: string
  type: string
  poster: string
}

export enum Type {
  Game = 'game',
  Movie = 'movie'
}
