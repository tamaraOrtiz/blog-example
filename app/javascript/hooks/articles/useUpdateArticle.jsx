import { useMemo } from 'react'

import { get, mapKeys, snakeCase } from 'lodash'

import axios from '~/lib/axios'

/**
 * Update article
 *
 * PUT /articles/{id}
 */
const useUpdateArticle = () => {
  const doPut = useMemo(
    () => async (articleId, values) => {
      const snakeKeyValues = mapKeys(values, (_, key) => snakeCase(key))
    
      try {
        const response = await axios.put(`articles/${articleId}`, {
          article: {
            ...snakeKeyValues,
          },
        })

        const data = get(response, 'data')
        return [data, null, response]
      } catch (error) {
        const response = get(error, 'response')
        return [null, response.data, response]
      }
    },
    []
  )

  return doPut
}

export default useUpdateArticle
