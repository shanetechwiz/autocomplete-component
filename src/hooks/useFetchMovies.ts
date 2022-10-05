import { useEffect, useState } from 'react'
import { MovieResponse } from '../types'

export const useFetchMovies = () => {
  const endpoint =
    'https://api.themoviedb.org/3/movie/popular?api_key=d0f5f2e135336200362af8a1a73acb17&language=en-US&page=1'
  const [isLoading, setIsLoading] = useState(false)
  const [data, setData] = useState<MovieResponse>()
  const [error, setError] = useState(null)

  useEffect(() => {
    ;(async () => {
      await fetch(endpoint)
        .then((response) => {
          if (response.ok) {
            return response.json()
          }
          throw response
        })
        .then((data) => {
          console.log(`number of movies: ${data.results.length}`)
          setData(data)
        })
        .catch((error) => {
          console.error('An error occured when attempting to fetch data', error)
          setError(error)
        })
        .finally(() => {
          setIsLoading(false)
        })
    })()
  }, [])

  return { isLoading, data, error }
}
