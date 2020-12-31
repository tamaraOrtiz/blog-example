import React, {useState, useEffect, useCallback} from 'react'
import { Spinner } from 'react-bootstrap';
import {concat, isEmpty} from "lodash";

import { useRemoteArticles } from '~/hooks/articles'
import ArticleList from "./ArticleList";

const RemoteArticleList = () => {
  const [articleList, setArticleList] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const { data: articles, loading } = useRemoteArticles(currentPage)

  useEffect(() => {
    if (!isEmpty(articles)){
      setArticleList(articleList => concat(articleList, articles))
    }
  }, [articles, setArticleList])

  const handleMoreArticles = useCallback(() => {
    setCurrentPage(currentPage => parseInt(currentPage)+1)
  }, [currentPage])

  return (
    <> 
      {loading && (<Spinner animation="border" />)}
      <ArticleList articles={articleList} handleMoreArticles={handleMoreArticles}/>
    </>
  )
}

export default RemoteArticleList