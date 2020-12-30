/**
 * RoutePaths
 */

export const HOME_PATH = '/'
export const ARTICLE_EDIT_PATH = '/articles/edit/'
export const LOGIN_PATH = '/login'
export const ARTICLE_PATH = '/articles/'
export const ARTICLE_NEW_PATH = '/articles/'

export const RoutePaths = Object.freeze({
  NEW_ARTICLE: ARTICLE_NEW_PATH,
  SHOW_ARTICLE: `${ARTICLE_PATH}:id?`,
  EDIT_ARTICLE: `${ARTICLE_EDIT_PATH}:id?`,
  LOGIN: LOGIN_PATH,
  HOME: `${HOME_PATH}:postType?`,
})

export default RoutePaths
