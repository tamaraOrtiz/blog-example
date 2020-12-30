import { includes } from 'lodash'

/**
 * User Roles
 */

const ROLE_ADMIN = 'admin'

const checkRole = (value, role) => {
  if (Array.isArray(value)) {
    return includes(value, role)
  }

  return role === value
}

export const Roles = Object.freeze({
  admin: ROLE_ADMIN,
  isAdmin: role => {
    return checkRole(role, ROLE_ADMIN)
  }
})


export default {
  Roles,
}
