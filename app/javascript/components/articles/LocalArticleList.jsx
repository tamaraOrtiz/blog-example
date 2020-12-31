import React, {useState, useEffect, useCallback} from 'react'
import {get, isEmpty, concat, uniq} from "lodash";
import { Spinner } from 'react-bootstrap';

import { useLocalArticles } from '~/hooks/articles'
import userPropType from "~/prop-types/users";
import ArticleList from "./ArticleList";

const LocalArticleList = ({currentUser}) => {
  const isAdmin = get(currentUser, 'userRoles.isAdmin')
  const [articleList, setArticleList] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const { data: articles, loading } = useLocalArticles(currentPage)

  useEffect(() => {
    if (!isEmpty(articles)){
      setArticleList(articleList => uniq(concat(articleList, articles)))
    }
  }, [articles, setArticleList])

  const handleMoreArticles = useCallback(() => {
    setCurrentPage(currentPage => parseInt(currentPage)+1)
  }, [currentPage])

  return (
    <> 
      {loading && (<Spinner animation="border" />)}
      <ArticleList articles={articleList} isEditable={isAdmin} handleMoreArticles={handleMoreArticles}/>
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
