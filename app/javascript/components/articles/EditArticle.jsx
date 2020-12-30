import React, {useCallback}  from 'react'
import { isEmpty } from 'lodash'
import {useParams} from "react-router-dom";

import articlePropType from "~/prop-types/articles";
import ArticleForm from "./ArticleForm";
import { useArticle, useUpdateArticle } from '~/hooks/articles'


const EditArticle = () => {
  const { id } = useParams();
  const { data: article } = useArticle(id)

  const updateArticle = useUpdateArticle()
  
  const handleSubmit = useCallback(async (values) => {
    await updateArticle(article.id, values)
  }, [article])

  if (isEmpty(article)) {
    return null
  }

  return (
    <ArticleForm article={article} onSubmit={handleSubmit} />
  )
}

EditArticle.propTypes = {
  article: articlePropType
}


export default EditArticle
