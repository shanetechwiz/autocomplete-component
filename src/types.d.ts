export type Movie = {
  poster_path?: string | undefined
  adult: boolean
  overview: string
  release_date: string
  genre_ids: number[]
  id: number
  original_title: string
  original_language: string
  title: string
  backdrop_path?: string | undefined
  popularity: number
  vote_count: number
  video: boolean
  vote_average: number
}

export type MovieResponse = {
  page: number
  results: Movie[]
  total_results: number
  total_pages: number
}

export type SearchSuggestions = {
  input: string
  suggestions: Movie[]
}

export type AutoCompleteProps = {}
