import React, {useCallback} from 'react'
import {useHistory} from "react-router-dom";

import ArticleForm from "./ArticleForm";
import { useCreateArticle } from '~/hooks/articles'
import {HOME_PATH} from '~/routes/RoutePaths'

const NewArticle = () => {
  const createArticle = useCreateArticle()
  const history = useHistory()

  const handleSubmit = useCallback(async (values) => {
    const [data] = await createArticle(values)
    if (data) {
      history.replace(HOME_PATH)
    }
  }, [])
  
  return (
    <ArticleForm onSubmit={handleSubmit}/>
  )
}

export default NewArticle
