import { useMemo } from 'react'

import { get, mapKeys, snakeCase } from 'lodash'

import axios from '~/lib/axios'

/**
 * Create article
 *
 * POST /articles
 */
const useUpdateArticle = () => {
  const doPost = useMemo(
    () => async (values) => {
      const snakeKeyValues = mapKeys(values, (_, key) => snakeCase(key))
    
      try {
        const response = await axios.post('articles', {
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

  return doPost
}

export default useUpdateArticle
