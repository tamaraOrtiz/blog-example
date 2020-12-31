import React, {useCallback} from 'react'

import {useHistory} from 'react-router-dom';

import { useCreateArticle } from '~/hooks/articles'
import {HOME_PATH} from '~/routes/RoutePaths'

import ArticleForm from './ArticleForm';

const NewArticle = () => {
  const createArticle = useCreateArticle()
  const history = useHistory()

  const handleSubmit = useCallback(async values => {
    const [data, error] = await createArticle(values)
    if (data) {
      history.replace(HOME_PATH)
    }
    return error
  }, [createArticle, history])

  return (
    <ArticleForm onSubmit={handleSubmit} />
  )
}

export default NewArticle
