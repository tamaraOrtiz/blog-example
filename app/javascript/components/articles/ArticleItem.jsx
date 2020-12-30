import React, {useCallback} from 'react'
import PropTypes from 'prop-types'
import Moment from 'react-moment';
import {Row, Col, Button} from 'react-bootstrap';
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";

import noImage from '~/assets/images/noimage.png'
import {ARTICLE_EDIT_PATH} from '~/routes/RoutePaths'
import articlePropType from "~/prop-types/articles";
import { useDeleteArticle } from '~/hooks/articles'

const ArticleItem = ({article, isEditable}) => {
  const { t } = useTranslation('common')
  const deleteArticle = useDeleteArticle()
  
  const handleDelete = useCallback(async () => {
    await deleteArticle(article.id)
    window.location.reload();
  }, [article])

  return (
    <Col lg={6} md={6}>
      <Row className="row g-0 m-2 overflow-hidden flex-md-row mb-4 h-md-250 position-relative">
        <Col lg={12} md={12} className='articleImage'>
          {article.urlToImage && (<img src={article.urlToImage} alt={article.title}/>)}
          {!article.urlToImage && (<img src={noImage}/>)}
        </Col>
        <Col lg={12} md={12} className="p-4 d-flex flex-column position-static">
          <h3 className="mb-0">{article.title}</h3>
          <Moment className="mb-1 text-muted" date={article.publishedAt} format= 'MMMM Do YYYY, h:mm:ss a'/>
          <p className="mb-auto mt-2">{article.description}</p>
        </Col>
        {isEditable && (
          <Col lg={12} md={12} className="d-flex justify-content-end">
            <Button onClick={handleDelete} variant="outline-secondary mr-2" size="sm">{t('delete')}</Button>
            <Link to={`${ARTICLE_EDIT_PATH}${article.id}`} className="btn btn-sm btn-outline-primary">{t('edit')}</Link>
          </Col>
        )}
      </Row>
    </Col>
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
