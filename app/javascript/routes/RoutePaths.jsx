/**
 * RoutePaths
 */

export const HOME_PATH = '/'
export const ARTICLE_EDIT_PATH = '/articles/edit/'
export const LOGIN_PATH = '/login'
export const ARTICLE_NEW_PATH = '/new_article'

export const RoutePaths = Object.freeze({
  NEW_ARTICLE: ARTICLE_NEW_PATH,
  EDIT_ARTICLE: `${ARTICLE_EDIT_PATH}:id?`,
  LOGIN: LOGIN_PATH,
  HOME: `${HOME_PATH}:postType?`,
})

export default RoutePaths
