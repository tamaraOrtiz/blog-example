import React from 'react'
import Moment from 'react-moment';
import {Row, Col, Container} from 'react-bootstrap';

import noImage from '~/assets/images/noimage.png'
import articlePropType from '~/prop-types/articles';

const ArticleDetail = ({article}) => {

  return (
    <Container className='pt-5'>
      <Row className='justify-content-md-center'>
        <Col lg={8} md={8}>
          <Row className='row g-0 m-2 overflow-hidden flex-md-row mb-4 h-md-250 position-relative'>
            <Col lg={12} md={12} className='articleImage'>
              {article.urlToImage && (<img src={article.urlToImage} alt={article.title}/>)}
              {!article.urlToImage && (<img src={noImage}/>)}
            </Col>
            <Col lg={12} md={12} className='p-4 d-flex flex-column position-static'>
              <h3 className='mb-0'>{article.title}</h3>
              <Moment className='mb-1 text-muted' date={article.publishedAt} format= 'MMMM Do YYYY, h:mm:ss a'/>
              <p className='mb-auto mt-2'>{article.content}</p>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  )
}

ArticleDetail.propTypes = {
  article: articlePropType.isRequired
}

export default ArticleDetail
