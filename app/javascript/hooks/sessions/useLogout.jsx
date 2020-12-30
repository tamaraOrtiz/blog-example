import { useMemo } from 'react'

import { get } from 'lodash'
import { mutate, cache } from 'swr'

import axios from 'axios'

/**
 * Logout
 *
 * DELETE /sessions
 */
const useLogout = () => {
  const doDelete = useMemo(
    () => async () => {
      try {
        const response = await axios.delete('sessions')

        const data = get(response, 'data')

        mutate('sessions', null)
        cache.clear()

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

export default useLogout
