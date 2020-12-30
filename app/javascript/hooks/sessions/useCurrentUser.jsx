import { useState, useEffect } from 'react'

import useSWR from 'swr'

import { Roles } from '~/constants'

/**
 * Retrieve the current logged in user data
 *
 * GET /sessions
 */
const useCurrentUser = () => {
  const { data, error, mutate } = useSWR('sessions')
  const [user, setUser] = useState()

  useEffect(() => {
    if (data) {
      const result = {
        ...data,
        userRoles: {
          isAdmin: Roles.isAdmin(data.roles),
        },
      }
      setUser(result)
    } else {
      setUser(null)
    }
  }, [data])

  return { data: user, loading: !error && !user, error, mutate }
}

export default useCurrentUser
