import React, {useCallback, useState} from 'react'

import PropTypes from 'prop-types'
import {Row, Col, Button} from 'react-bootstrap';
import {useTranslation} from 'react-i18next';
import Moment from 'react-moment';
import {Link, useHistory} from 'react-router-dom';

import noImage from '~/assets/images/noimage.png'
import { useDeleteArticle } from '~/hooks/articles'
import { useArticleContext } from '~/hooks/context'
import articlePropType from '~/prop-types/articles';
import {ARTICLE_EDIT_PATH, HOME_PATH} from '~/routes/RoutePaths'


const ArticleItem = ({article, isEditable}) => {
  const { t } = useTranslation('common')
  const [isDeleted, setIsDeleted] = useState(false)
  const { setArticle } = useArticleContext()
  const history = useHistory()
  const deleteArticle = useDeleteArticle()
  
  const handleDelete = useCallback(async () => {
    const [data] = await deleteArticle(article.id)
    if (data) {
      setIsDeleted(true)
    }
  }, [article, deleteArticle])

  const handleOnClick = useCallback(() => {
    setArticle(article)
    history.replace(`${HOME_PATH}see_post`)
  }, [article, setArticle, history])

  return (
    <>
      {!isDeleted && 
      (
        <Col lg={12} md={12}>
          <Row className='row pb-4 pointer' onClick={handleOnClick}>
            <Col lg={6} md={6} className='articleImage'>
              {article.urlToImage && (<img src={article.urlToImage} alt={article.title} />)}
              {!article.urlToImage && (<img src={noImage} alt={article.title} />)}
            </Col>
            <Col lg={6} md={6} className='p-4'>
              <h3 className='mb-0'>{article.title}</h3>
              <Moment className='mb-1 text-muted' date={article.publishedAt} format='MMMM Do YYYY, h:mm:ss a' />
              <p className='mb-auto mt-2'>{article.description}</p>
            </Col>
          </Row>
          {isEditable && (
          <div className='d-flex justify-content-end'>
            <Button onClick={handleDelete} variant='outline-secondary mr-2' size='sm'>{t('delete')}</Button>
            <Link to={`${ARTICLE_EDIT_PATH}${article.id}`} className='btn btn-sm btn-outline-primary'>{t('edit')}</Link>
          </div>
            )}
        </Col>
      )}
    </>
    
  )
}

ArticleItem.propTypes = {
  article: articlePropType.isRequired,
  isEditable: PropTypes.bool
}

ArticleItem.defaultProps = {
  isEditable: false
}

export default ArticleItem
