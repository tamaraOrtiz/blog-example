import React, {useCallback, useMemo} from 'react'

import { useFormik } from 'formik'
import { map, get } from 'lodash'
import PropTypes from 'prop-types'
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import {useTranslation} from 'react-i18next';

import noImage from '~/assets/images/noimage.png'
import DateInput from '~/components/DateInput'
import FileInput from '~/components/FileInput'
import TextArea from '~/components/TextArea'
import TextField from '~/components/TextField'
import articlePropType from '~/prop-types/articles';
import {ArticleSchema} from '~/validators'

const ArticleForm = ({article, onSubmit}) => {
  const publishedAt = useMemo(()=> (article?.publishedAt ? new Date(article?.publishedAt) : new Date()),[article]);
  const { t } = useTranslation(['article', 'common'])
  const { values, errors, handleChange, handleSubmit, isSubmitting, setFieldValue, setFieldError } = useFormik({
    initialValues: {
      id: article?.id || null,
      title: article?.title || '',
      description: article?.description || '',
      content: article?.content || '',
      publishedAt,
      image: null,
      urlToImage: article?.urlToImage || null,
    },
    enableReinitialize: true,
    validationSchema: ArticleSchema,
    onSubmit: async newValues => {
      const responseErrors = await onSubmit(newValues)
      if (responseErrors) {
        map(get(responseErrors, 'errors'), (value, key) => {
          setFieldError(key, value)})
      }
    },
  })

  const handleDateChange = useCallback(value => {
    setFieldValue('publishedAt', value)
  }, [setFieldValue])

  const toBase64 = file =>
    new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = () => resolve(reader.result)
      reader.onerror = error => reject(error)
    })

  const handleFileUpload = useCallback(async e => {
    const file = e.target.files[0]
    if (file){
      await toBase64(file).then(base64 => {
        setFieldValue('image', {
          data: base64,
          filename: file.name,
          content_type: file.type,
          lastModified: file.lastModified,
        })
      })
    }
  }, [setFieldValue])
  
  return (
    <Container className='pt-5'>
      <Row>
        <Col lg={12} md={12}>
          <h3>{article?.id ? t('article:edit:title') : t('article:new:title') }</h3>
        </Col>
        <Col lg={6} md={6} className='articleImage'>
          {values.urlToImage && (<img src={values.urlToImage} alt={values.title} />)}
          {!values.urlToImage && (<img src={noImage} alt={values.title} />)}
        </Col>
        <Col lg={6} md={6}>
          <Form onSubmit={handleSubmit}>
            <TextField
              label={t('article:title.label')}
              type='text'
              placeholder={t('article:title.placeholder')}
              name='title'
              value={values.title}
              error={t(errors.title)}
              onChange={handleChange}
            />
            <TextField
              label={t('article:description.label')}
              type='text'
              placeholder={t('article:description.placeholder')}
              name='description'
              value={values.description}
              error={t(errors.description)}
              onChange={handleChange}
            />
            <TextArea
              label={t('article:content.label')}
              placeholder={t('article:content.placeholder')}
              name='content'
              value={values.content}
              error={t(errors.content)}
              onChange={handleChange}
            />
            <DateInput
              label={t('article:publishedAt.label')}
              name='publishedAt'
              value={values.publishedAt}
              error={t(errors.publishedAt)}
              onChange={handleDateChange}
            />
            <FileInput
              label={t('article:image.label')}
              name='image'
              error={t(errors.image)}
              onChange={handleFileUpload}
            />

            <Button type='submit' className='text-right' disabled={isSubmitting}>
              {t(isSubmitting ? 'common:processing' : 'common:save')}
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}

ArticleForm.propTypes = {
  article: articlePropType,
  onSubmit: PropTypes.func
}

ArticleForm.defaultProps = {
  article: null,
  onSubmit: () => {},
}

export default ArticleForm
