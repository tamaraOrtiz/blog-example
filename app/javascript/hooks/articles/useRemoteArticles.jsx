import {useMemo} from 'react'
import useSWR from 'swr'
import { get } from 'lodash'

/**
 * Retrieve external articles
 *
 * GET [REMOTE_ARTICLES_URL]
 *
 */
const useRemoteArticles = () => {
  const { data, error, mutate } = useSWR(`${process.env.REMOTE_ARTICLES_URL}&pageSize=${process.env.ARTICLE_PAGE_SIZE}&apiKey=${process.env.REMOTE_ARTICLES_API_KEY}`)

  const articles = useMemo(() => get(data, 'articles', []), [
    data,
  ])

  return { data: articles, loading: !error && !data, error, mutate }
}

export default useRemoteArticles
