import React, {useCallback} from 'react'

import { map } from 'lodash'
import PropTypes from 'prop-types'
import {useTranslation} from 'react-i18next';
import InfiniteScroll from 'react-infinite-scroll-component';

import ArticleItem from './ArticleItem';

const ArticleList = ({articles, isEditable, setCurrentPage}) => {
  const { t } = useTranslation('common')

  const onMoreArticles = useCallback(() => {
    setTimeout(() => {
      setCurrentPage(currentPage => parseInt(currentPage, 10)+1)
    }, 1500);
  }, [setCurrentPage])

  return (
    <div className='row'>
      <InfiniteScroll
        dataLength={articles.length}
        next={onMoreArticles}
        hasMore
        loader={<h4>{t('loading')}</h4>}
      >
        {map(articles, (article, index) => (
          <ArticleItem key={index} article={article} isEditable={isEditable} />
            )
          )}
      </InfiniteScroll>
      
    </div>
  )
}

ArticleList.propTypes = {
  articles: PropTypes.array,
  isEditable: PropTypes.bool,
  setCurrentPage: PropTypes.func,
}

ArticleList.defaultProps = {
  articles: [],
  isEditable: false,
  setCurrentPage: () => {}
}

export default ArticleList
