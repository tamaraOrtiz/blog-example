import useSWR from 'swr'
import { isNil } from 'lodash'

/**
 * Retrieve local article
 *
 * GET /articles/:id
 *
 */
const useArticle = (articleId) => {
  const { data, error, mutate } =  useSWR(() => {
    if (isNil(articleId)) {
      return false
    }

    return `articles/${articleId}`
  })


  return { data, loading: !error && !data, error, mutate }
}

export default useArticle
