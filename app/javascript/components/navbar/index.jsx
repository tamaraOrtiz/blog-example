import React, {useCallback} from 'react'
import { useTranslation } from 'react-i18next'
import {Link, useHistory, useLocation} from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { get } from 'lodash'

import { useLogout } from '~/hooks/sessions'
import { useCurrentUser } from '~/hooks/sessions'
import {ARTICLE_NEW_PATH, LOGIN_PATH, HOME_PATH} from '~/routes/RoutePaths'

const Navbar = () => {
  const { t } = useTranslation()
  const logout = useLogout()
  const history = useHistory()
  const location = useLocation()
  const pathName = get(location, 'pathname')
  const showNavbar = pathName !== LOGIN_PATH
  const { data: currentUser } = useCurrentUser()
  const isAdmin = get(currentUser, 'userRoles.isAdmin')
  const handleLogout = useCallback(async () => {
    const [data] = await logout()
    if (data) {
      history.replace(HOME_PATH)
    }
  }, [logout])

  return (
    <>
    {showNavbar && (
      <Container>
        <header className='blog-header py-3'>
          <Row className='row flex-nowrap justify-content-between align-items-center'>
            <Col lg={{ span: 4, offset: 4 }} md={{ span: 4, offset: 4 }} className='text-center'>
              <h2><Link to={HOME_PATH} className='blog-header-title text-dark'>{t('homePage:title')}</Link></h2>
            </Col>
            <Col lg={4} md={4} className='d-flex justify-content-end align-items-center'>
              {!isAdmin && (<Link to={LOGIN_PATH} className='btn btn-sm btn-outline-secondary'>{t('homePage:login')}</Link>)}
              {isAdmin && (
                <>
                  <Link to={ARTICLE_NEW_PATH} className='btn btn-sm btn-outline-primary mr-2'>{t('homePage:newArticle')}</Link>
                  <Button onClick={handleLogout} variant='outline-secondary' size='sm'>{t('homePage:logout')}</Button>
                </>)}
            </Col>
          </Row>
        </header>
      </Container>)
    }
    </>
  )
}

export default Navbar