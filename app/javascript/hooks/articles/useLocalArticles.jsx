import useSWR from 'swr'

/**
 * Retrieve local articles
 *
 * GET /articles
 *
 */
const useLocalArticles = (page) => {
  const { data, error, mutate } = useSWR(`articles?page=${page}`)

  return { data, loading: !error && !data, error, mutate }
}

export default useLocalArticles
