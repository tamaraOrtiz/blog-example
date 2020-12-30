import { useMemo } from 'react'

import { get } from 'lodash'
import { mutate } from 'swr'

import axios from 'axios'

/**
 * Login
 *
 * POST /sessions
 */
const useLogin = () => {

  const doPost = useMemo(
    () => async (email, password) => {
      try {
        const response = await axios.post('sessions', {
          user: {
            email,
            password,
          },
        })

        const data = get(response, 'data')

        mutate('sessions', data)

        return [data, null, response]
      } catch (error) {
        console.log(error)
        const response = get(error, 'response')
        return [null, response.data, response]
      }
    },
    []
  )

  return doPost
}

export default useLogin
