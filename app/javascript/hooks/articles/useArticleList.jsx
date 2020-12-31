import {useState, useEffect} from 'react'
import {isEmpty, concat, uniq} from "lodash";

/**
 * Use article list actions
 *
 */
const useArticleList = (articles) => {
  const [articleList, setArticleList] = useState([])

  useEffect(() => {
    if (!isEmpty(articles)){
      setArticleList(articleList => uniq(concat(articleList, articles)))
    }
  }, [articles, setArticleList])

  return articleList
}

export default useArticleList
