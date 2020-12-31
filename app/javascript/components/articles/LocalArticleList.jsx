import React, {useState, useCallback} from 'react'
import {get} from 'lodash';
import { Spinner } from 'react-bootstrap';

import { useLocalArticles, useArticleList } from '~/hooks/articles'
import userPropType from '~/prop-types/users';
import ArticleList from './ArticleList';

const LocalArticleList = ({currentUser}) => {
  const isAdmin = get(currentUser, 'userRoles.isAdmin')
  const [currentPage, setCurrentPage] = useState(1) 
  const { data: articles, loading } = useLocalArticles(currentPage)
  const articleList = useArticleList(articles)

  return (
    <> 
      {loading && (<Spinner animation='border' />)}
      <ArticleList articles={articleList} isEditable={isAdmin} setCurrentPage={setCurrentPage}/>
    </>
  )
}

LocalArticleList.propTypes = {
  currentUser: userPropType
}

LocalArticleList.defaultProps = {
  currentUser: null
}


export default LocalArticleList
