import React from 'react'

import { useRemoteArticles } from '~/hooks/articles'
import ArticleList from "./ArticleList";

const RemoteArticleList = () => {

  const { data: articles } = useRemoteArticles()

  return (
    <ArticleList articles={articles}/>
  )
}

export default RemoteArticleList