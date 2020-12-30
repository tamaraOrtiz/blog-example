import useSWR from 'swr'

/**
 * Retrieve local articles
 *
 * GET /articles
 *
 */
const useLocalArticles = () => {
  const { data, error, mutate } = useSWR('articles')

  return { data, loading: !error && !data, error, mutate }
}

export default useLocalArticles
