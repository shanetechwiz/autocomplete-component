import React, { ChangeEvent, useState } from 'react'
import { useFetchMovies } from '../../hooks/useFetchMovies'
import { AutoCompleteProps, Movie, SearchSuggestions } from '../../types'
import {
  StyledInput,
  StyledSuggestionsContainer,
  StyledSuggestionItem,
  StyledSuggestion,
  StyledWrapper,
} from './AutoComplete.styles'

export const AutoComplete = ({}: AutoCompleteProps): JSX.Element | null => {
  const { isLoading, data, error } = useFetchMovies()
  let movies: Movie[]

  if (error) return <h3>An error occured, please refresh the page and try again.</h3>
  if (isLoading) return <h3>Please wait, loading...</h3>
  if (data) {
    movies = data.results
  }

  const [search, setSearch] = useState<SearchSuggestions>({ input: '', suggestions: [] })
  const [displaySuggestions, setDisplaySuggestions] = useState(true)

  const onInputChanged = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    let suggestions: Movie[] = []
    if (value.length > 0) {
      const regex = new RegExp(`^${value}`, 'i')
      suggestions = movies.filter((movie: Movie) => regex.test(movie.title))
    }
    setDisplaySuggestions(true)
    setSearch({ suggestions, input: value })
  }

  const suggestionSelected = (value: Movie) => {
    setDisplaySuggestions(false)

    setSearch({
      input: value.title,
      suggestions: [],
    })
  }

  return (
    <StyledWrapper>
      <div>
        <StyledInput
          id="input"
          autoComplete="off"
          value={search.input}
          onChange={onInputChanged}
          type={'text'}
        />
      </div>

      {search.suggestions.length > 0 && displaySuggestions ? (
        <StyledSuggestionsContainer>
          {search.suggestions.map((item: Movie) => (
            <StyledSuggestionItem key={item.id}>
              <StyledSuggestion onClick={() => suggestionSelected(item)}>
                {item.title.replace(search.input, `<b>${search.input}</b>`)}
              </StyledSuggestion>
            </StyledSuggestionItem>
          ))}
        </StyledSuggestionsContainer>
      ) : null}
    </StyledWrapper>
  )
}
