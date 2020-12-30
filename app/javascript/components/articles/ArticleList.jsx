import React from 'react'
import { map } from 'lodash'
import PropTypes from 'prop-types'

import ArticleItem from "./ArticleItem";

const ArticleList = ({articles, isEditable}) => {
  return (
    <div className='row'>
      {map(articles, (article, index) => (
        <ArticleItem key={index} article={article} isEditable={isEditable}/>
        )
      )}
    </div>
  )
}

ArticleList.propTypes = {
  articles: PropTypes.array,
  isEditable: PropTypes.bool
}

ArticleList.defaultProps = {
  articles: [],
  isEditable: false
}

export default ArticleList
