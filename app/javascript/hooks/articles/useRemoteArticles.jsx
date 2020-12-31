import {useMemo} from 'react'
import useSWR from 'swr'
import { get } from 'lodash'

/**
 * Retrieve external articles
 *
 * GET [REMOTE_ARTICLES_URL]
 *
 */
const useRemoteArticles = (page) => {
  const { data, error, mutate } = useSWR(`articles/remote_index?page=${page}`)

  return { data: data, loading: !error && !data, error, mutate }
}

export default useRemoteArticles
