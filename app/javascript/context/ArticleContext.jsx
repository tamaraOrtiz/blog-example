import React, { createContext, useState, useCallback } from 'react'

import PropTypes from 'prop-types'

const ArticleContext = createContext()

export const ArticleProvider = ({ children }) => {
  const [article, setArticle] = useState(null)

  const clearArticle = useCallback(() => {
    setArticle(null)
  }, [])

  return (
    <ArticleContext.Provider value={{article, setArticle}}>
      {children}
    </ArticleContext.Provider>
  )
}

ArticleProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export const ArticleConsumer = ArticleContext.Consumer

export default ArticleContext
