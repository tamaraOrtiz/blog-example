import React from 'react'
import { useTranslation } from 'react-i18next'
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import { Container, Row, Col, Button } from 'react-bootstrap';

import {HOME_PATH} from '~/routes/RoutePaths'

const Header = ({isRemote}) => {
  const { t } = useTranslation()

  return (
    <Container>
      <div className="nav-scroller py-1 mb-2">
        <nav className="nav d-flex justify-content-between">
          <Link to={`${HOME_PATH}local`} className={`p-2 link-secondary ${!isRemote ? 'active' : ''}`}>{t('post:local')}</Link>
          <Link to={`${HOME_PATH}remote`} className={`p-2 link-secondary ${isRemote ? 'active' : ''}`}>{t('post:remote')}</Link>
        </nav>
      </div>
    </Container>
  )
}

Header.propTypes = {
  isRemote: PropTypes.bool
}

Header.defaultProps = {
  isRemote: false
}

export default Header