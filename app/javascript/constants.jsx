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
  isAdmin: role => checkRole(role, ROLE_ADMIN)
})

/**
 * Post types
 */

const LOCAL_POST = 'local'
const REMOTE_POST = 'remote'
const SEE_POST = 'see_post'

export const PostTypes = Object.freeze({
  local: LOCAL_POST,
  remote: REMOTE_POST,
  see_post: SEE_POST
})

export default {
  Roles,
  PostTypes
}
