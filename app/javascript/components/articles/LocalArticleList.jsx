import React from 'react'

import { useLocalArticles } from 'hooks/articles'
import ArticleList from "./ArticleList";
import {get} from "lodash";

const LocalArticleList = ({currentUser}) => {
  const isAdmin = get(currentUser, 'userRoles.isAdmin')
  const { data: articles, loading } = useLocalArticles()

  return (
    <ArticleList articles={articles} isEditable={isAdmin}/>
  )
}

export default LocalArticleList
