import HomePage from '~/components/homepage'
import Login from '~/components/login'
import EditArticle from '~/components/articles/EditArticle'
import NewArticle from '~/components/articles/NewArticle'

import RoutePaths from './RoutePaths'

/**
 * Routes
 */

const Routes = Object.freeze({
  LOGIN: {
    path: RoutePaths.LOGIN,
    exact: true,
    component: Login,
  },
  NEW_ARTICLE: {
    path: RoutePaths.NEW_ARTICLE,
    exact: true,
    component: NewArticle,
  },
  EDIT_ARTICLE: {
    path: RoutePaths.EDIT_ARTICLE,
    exact: false,
    component: EditArticle,
  },
  SHOW_ARTICLE: {
    path: RoutePaths.SHOW_ARTICLE,
    exact: false,
    component: HomePage,
  },
  HOME: {
    path: RoutePaths.HOME,
    exact: false,
    component: HomePage
  },
})

export default Routes
