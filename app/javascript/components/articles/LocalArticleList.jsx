import React from 'react'
import {get} from "lodash";

import { useLocalArticles } from '~/hooks/articles'
import userPropType from "~/prop-types/users";
import ArticleList from "./ArticleList";

const LocalArticleList = ({currentUser}) => {
  const isAdmin = get(currentUser, 'userRoles.isAdmin')
  const { data: articles, loading } = useLocalArticles()

  return (
    <ArticleList articles={articles} isEditable={isAdmin}/>
  )
}

LocalArticleList.propTypes = {
  currentUser: userPropType
}

LocalArticleList.defaultProps = {
  currentUser: null
}


export default LocalArticleList
