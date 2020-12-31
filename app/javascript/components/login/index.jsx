import React from 'react'
import { useFormik } from 'formik'
import { get } from 'lodash'
import {useTranslation} from 'react-i18next';
import {Link, useHistory} from 'react-router-dom';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

import { useLogin } from '~/hooks/sessions'
import TextField from '~/components/TextField'
import { LoginSchema } from '~/validators'
import {HOME_PATH} from '~/routes/RoutePaths'


const Login = () => {
  const { t } = useTranslation(['login', 'validations', 'homePage'])
  const login = useLogin()
  const history = useHistory()

  const { values, errors, handleSubmit, handleChange, setFieldError, isSubmitting } = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    enableReinitialize: true,
    validationSchema: LoginSchema,
    onSubmit: async ({ email, password }) => {
      const [, error] = await login(email, password)
      if (error) {
        setFieldError('email', get(error, 'error'))
        return
      }
      history.replace(HOME_PATH)
    },
  })

  return (
    <Container className='pt-5'>
      <Row className='justify-content-md-center'>
        <Col lg={6} md={6}>
          <h2 className='text-center pt-5'><Link to='/' className='text-dark'>{t('homePage:title')}</Link></h2>
          <Form onSubmit={handleSubmit}>
            <TextField
              label={t('login:email.label')}
              type='email'
              placeholder={t('login:email.placeholder')}
              name='email'
              value={values.email}
              error={t(errors.email)}
              onChange={handleChange}
            />
            <TextField
              id='password'
              label={t('login:password.label')}
              type='password'
              placeholder={t('login:password.placeholder')}
              name='password'
              error={t(errors.password)}
              value={values.password}
              onChange={handleChange}
            />

            <Button type='submit' disabled={isSubmitting} >
              {t(isSubmitting ? 'login:signingIn' : 'login:signIn')}
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}

export default Login
