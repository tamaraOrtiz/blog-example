import React, {useState, useCallback} from 'react'
import { Spinner } from 'react-bootstrap';

import { useRemoteArticles, useArticleList } from '~/hooks/articles'
import ArticleList from './ArticleList';

const RemoteArticleList = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const { data: articles, loading } = useRemoteArticles(currentPage)
  const articleList = useArticleList(articles)

  return (
    <> 
      {loading && (<Spinner animation='border' />)}
      <ArticleList articles={articleList} setCurrentPage={setCurrentPage}/>
    </>
  )
}

export default RemoteArticleList