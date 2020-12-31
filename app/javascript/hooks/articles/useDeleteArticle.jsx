import { useMemo } from 'react'
import { get } from 'lodash'

import axios from '~/lib/axios'

/**
 * Delete article
 *
 * DELETE /articles/{id}
 */
const useDeleteArticle = () => {
  const doDelete = useMemo(
    () => async (articleId) => {
      try {
        const response = await axios.delete(`articles/${articleId}`)
        const data = get(response, 'data')
        return [data, null, response]
      } catch (error) {
        const response = get(error, 'response')
        return [null, response.data, response]
      }
    },
    []
  )

  return doDelete
}

export default useDeleteArticle
