import { useContext } from 'react'

import { ArticleContext } from '~/context'

const useArticleContext = () => {
  return useContext(ArticleContext)
}

export default useArticleContext
