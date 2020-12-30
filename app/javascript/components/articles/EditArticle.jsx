import React from 'react'

import ArticleForm from "./ArticleForm";
import articlePropType from "prop-types/articles";

const EditArticle = ({article}) => {

  return (
    <ArticleForm article={article}/>
  )
}

EditArticle.propTypes = {
  article: articlePropType
}


export default EditArticle
