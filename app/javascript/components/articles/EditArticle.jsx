import React, {useCallback}  from 'react'

import { isEmpty } from 'lodash'
import {useParams} from 'react-router-dom';

import { useArticle, useUpdateArticle } from '~/hooks/articles'

import ArticleForm from './ArticleForm';


const EditArticle = () => {
  const { id } = useParams();
  const { data: article } = useArticle(id)

  const updateArticle = useUpdateArticle()
  
  const handleSubmit = useCallback(async values => {
    const [, error] = await updateArticle(article.id, values)
    return error
  }, [article, updateArticle])

  if (isEmpty(article)) {
    return null
  }

  return (
    <ArticleForm article={article} onSubmit={handleSubmit} />
  )
}

export default EditArticle
